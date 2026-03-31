import prisma from "../../config/db.js";
import redis from "../../config/redis.js";
import { AppError } from "../../utils/AppError.js";

const DASHBOARD_CACHE_KEY = "admin:dashboard:stats";
const DASHBOARD_CACHE_TTL = 30;

export const getDashboardStats = async () => {
  const cached = await redis.get(DASHBOARD_CACHE_KEY);
  if (cached) return cached;

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const [
    usersTotal,
    usersActive,
    usersBanned,
    usersNewToday,
    gamesTotal,
    gamesActive,
    gamesHot,
    pointsAgg,
    supportOpenTickets,
    supportUrgentTickets,
    rewardsPendingRedemptions,
    tournamentsActive,
    tournamentsUpcoming,
  ] = await Promise.all([
    prisma.user.count({ where: { role: "PLAYER" } }),
    prisma.user.count({ where: { role: "PLAYER", isActive: true, isBanned: false } }),
    prisma.user.count({ where: { role: "PLAYER", isBanned: true } }),
    prisma.user.count({ where: { role: "PLAYER", createdAt: { gte: startOfToday } } }),
    prisma.game.count(),
    prisma.game.count({ where: { isActive: true } }),
    prisma.game.count({ where: { isHot: true } }),
    prisma.user.aggregate({
      _sum: { totalPoints: true, lifetimePoints: true },
    }),
    prisma.supportTicket.count({ where: { status: "OPEN" } }),
    prisma.supportTicket.count({
      where: { priority: "URGENT", status: { notIn: ["RESOLVED", "CLOSED"] } },
    }),
    prisma.rewardRedemption.count({ where: { status: "PENDING" } }),
    prisma.tournament.count({ where: { status: "ACTIVE" } }),
    prisma.tournament.count({ where: { status: "UPCOMING" } }),
  ]);

  const data = {
    users: {
      total: usersTotal,
      active: usersActive,
      banned: usersBanned,
      newToday: usersNewToday,
    },
    games: {
      total: gamesTotal,
      active: gamesActive,
      hot: gamesHot,
    },
    points: {
      totalInCirculation: pointsAgg._sum.totalPoints || 0,
      totalEverEarned: pointsAgg._sum.lifetimePoints || 0,
    },
    support: {
      openTickets: supportOpenTickets,
      urgentTickets: supportUrgentTickets,
    },
    rewards: {
      pendingRedemptions: rewardsPendingRedemptions,
    },
    tournaments: {
      active: tournamentsActive,
      upcoming: tournamentsUpcoming,
    },
  };

  await redis.set(DASHBOARD_CACHE_KEY, data, { ex: DASHBOARD_CACHE_TTL });
  return data;
};

export const listUsers = async ({
  search,
  role,
  vipTier,
  isBanned,
  page = 1,
  limit = 20,
}) => {
  const where = {
    ...(role ? { role } : {}),
    ...(vipTier ? { vipTier } : {}),
    ...(isBanned !== undefined ? { isBanned } : {}),
    ...(search
      ? {
          OR: [
            { username: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
          ],
        }
      : {}),
  };
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    prisma.user.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
      select: {
        id: true,
        email: true,
        username: true,
        avatarUrl: true,
        totalPoints: true,
        vipTier: true,
        isBanned: true,
        role: true,
        createdAt: true,
        isActive: true,
      },
    }),
    prisma.user.count({ where }),
  ]);

  return { items, total, page, limit };
};

export const getUserDetail = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      username: true,
      avatarUrl: true,
      role: true,
      vipTier: true,
      totalPoints: true,
      lifetimePoints: true,
      loginStreak: true,
      lastLoginAt: true,
      referralCode: true,
      isActive: true,
      isBanned: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!user) throw new AppError("User not found", 404);

  const [recentSessions, recentTransactions, openSupportTicketsCount, totalRedemptionsCount, referralCount] =
    await Promise.all([
      prisma.gameSession.findMany({
        where: { userId },
        orderBy: { playedAt: "desc" },
        take: 5,
        include: { game: { select: { title: true } } },
      }),
      prisma.pointTransaction.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
      prisma.supportTicket.count({
        where: { userId, status: { notIn: ["RESOLVED", "CLOSED"] } },
      }),
      prisma.rewardRedemption.count({ where: { userId } }),
      prisma.user.count({ where: { referredById: userId } }),
    ]);

  return {
    ...user,
    recentSessions,
    recentTransactions,
    openSupportTicketsCount,
    totalRedemptionsCount,
    referralCount,
  };
};

export const banUser = async (adminId, userId, reason) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new AppError("User not found", 404);
  if (["ADMIN", "SUPER_ADMIN"].includes(user.role)) {
    throw new AppError("Cannot ban admin user", 403);
  }

  await prisma.user.update({
    where: { id: userId },
    data: { isBanned: true },
  });
  await redis.del(`refresh:${userId}`);

  await prisma.notification.create({
    data: {
      userId,
      type: "SYSTEM",
      title: "Account suspended",
      body: reason || "Your account has been suspended.",
    },
  });

  return { message: "User banned" };
};

export const unbanUser = async (adminId, userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new AppError("User not found", 404);

  await prisma.user.update({
    where: { id: userId },
    data: { isBanned: false },
  });

  await prisma.notification.create({
    data: {
      userId,
      type: "SYSTEM",
      title: "Account reinstated",
      body: "Your account has been reinstated.",
    },
  });

  return { message: "User unbanned" };
};

export const changeUserRole = async (adminId, targetUserId, newRole) => {
  if (!["PLAYER", "ADMIN", "SUPER_ADMIN"].includes(newRole)) {
    throw new AppError("Invalid role", 400);
  }
  if (adminId === targetUserId) throw new AppError("Cannot change your own role", 400);

  const updated = await prisma.user.update({
    where: { id: targetUserId },
    data: { role: newRole },
    select: {
      id: true,
      email: true,
      username: true,
      role: true,
      vipTier: true,
      totalPoints: true,
      isBanned: true,
    },
  });

  return updated;
};

export const listApprovals = async ({ status, type, page = 1, limit = 20 }) => {
  const where = {
    ...(status ? { status } : {}),
    ...(type ? { type } : {}),
  };
  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    prisma.approval.findMany({
      where,
      include: {
        requestedBy: { select: { id: true, username: true } },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.approval.count({ where }),
  ]);
  return { items, total, page, limit };
};

export const getApproval = async (id) => {
  const approval = await prisma.approval.findUnique({
    where: { id },
    include: {
      requestedBy: { select: { id: true, username: true, email: true } },
      reviewedBy: { select: { id: true, username: true, email: true } },
    },
  });
  if (!approval) throw new AppError("Approval not found", 404);
  return approval;
};

export const createApproval = async (adminUserId, { type, notes }) => {
  return prisma.approval.create({
    data: {
      type,
      notes,
      requestedById: adminUserId,
      status: "PENDING",
    },
  });
};

export const reviewApproval = async (adminId, approvalId, status, notes) => {
  if (!["APPROVED", "REJECTED"].includes(status)) {
    throw new AppError("Invalid status", 400);
  }

  const approval = await prisma.approval.findUnique({ where: { id: approvalId } });
  if (!approval) throw new AppError("Approval not found", 404);
  if (approval.requestedById === adminId) throw new AppError("Cannot review your own approval", 400);
  if (approval.status !== "PENDING") throw new AppError("Already reviewed", 400);

  return prisma.approval.update({
    where: { id: approvalId },
    data: {
      status,
      notes,
      reviewedById: adminId,
    },
    include: {
      requestedBy: { select: { id: true, username: true } },
      reviewedBy: { select: { id: true, username: true } },
    },
  });
};
