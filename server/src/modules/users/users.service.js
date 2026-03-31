import prisma from "../../config/db.js";
import { AppError } from "../../utils/AppError.js";
import redis from "../../config/redis.js";
import { comparePassword, hashPassword } from "../../utils/bcrypt.js";

export const getMyNotifications = async (userId, { page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit;
  const [items, total, unreadCount] = await Promise.all([
    prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.notification.count({ where: { userId } }),
    prisma.notification.count({ where: { userId, isRead: false } }),
  ]);

  return { items, total, unreadCount, page, limit };
};

export const markAsRead = async (userId, notificationId) => {
  const notification = await prisma.notification.findUnique({
    where: { id: notificationId },
  });
  if (!notification) throw new AppError("Notification not found", 404);
  if (notification.userId !== userId) throw new AppError("Forbidden", 403);

  return prisma.notification.update({
    where: { id: notificationId },
    data: { isRead: true },
  });
};

export const markAllAsRead = async (userId) => {
  await prisma.notification.updateMany({
    where: { userId, isRead: false },
    data: { isRead: true },
  });
  return { message: "All notifications marked as read" };
};

const sanitizeUser = (user) => {
  const { passwordHash, ...rest } = user;
  return rest;
};

export const getMyProfile = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      username: true,
      avatarUrl: true,
      totalPoints: true,
      lifetimePoints: true,
      vipTier: true,
      loginStreak: true,
      referralCode: true,
      createdAt: true,
      role: true,
      isActive: true,
      isBanned: true,
    },
  });
  if (!user) throw new AppError("User not found", 404);
  return user;
};

export const updateMyProfile = async (userId, { username, avatarUrl }) => {
  if (username) {
    const existing = await prisma.user.findFirst({
      where: { username, id: { not: userId } },
      select: { id: true },
    });
    if (existing) throw new AppError("Username already taken", 409);
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      ...(username !== undefined ? { username } : {}),
      ...(avatarUrl !== undefined ? { avatarUrl } : {}),
    },
  });

  return sanitizeUser(user);
};

export const changePassword = async (userId, currentPassword, newPassword) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, passwordHash: true },
  });
  if (!user) throw new AppError("User not found", 404);

  const matched = await comparePassword(currentPassword, user.passwordHash);
  if (!matched) throw new AppError("Current password is incorrect", 401);

  const passwordHash = await hashPassword(newPassword);
  await prisma.user.update({
    where: { id: userId },
    data: { passwordHash },
  });

  await redis.del(`refresh:${userId}`);
  return { message: "Password changed. Please log in again." };
};

export const getMyStats = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      username: true,
      totalPoints: true,
      lifetimePoints: true,
      vipTier: true,
      loginStreak: true,
    },
  });
  if (!user) throw new AppError("User not found", 404);

  const [
    totalGamesPlayed,
    higherCount,
    totalTournamentsEntered,
    bestTournamentRankAgg,
  ] = await Promise.all([
    prisma.gameSession.count({ where: { userId } }),
    prisma.user.count({
      where: {
        isActive: true,
        isBanned: false,
        totalPoints: { gt: user.totalPoints },
      },
    }),
    prisma.tournamentEntry.count({ where: { userId } }),
    prisma.tournamentEntry.aggregate({
      where: { userId, rank: { not: null } },
      _min: { rank: true },
    }),
  ]);

  return {
    totalGamesPlayed,
    totalPointsEarnedAllTime: user.lifetimePoints,
    currentPointsBalance: user.totalPoints,
    currentVipTier: user.vipTier,
    globalRank: higherCount + 1,
    loginStreak: user.loginStreak,
    totalTournamentsEntered,
    bestTournamentRank: bestTournamentRankAgg._min.rank,
  };
};
