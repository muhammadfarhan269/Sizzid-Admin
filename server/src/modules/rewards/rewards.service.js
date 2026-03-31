import prisma from "../../config/db.js";
import { AppError } from "../../utils/AppError.js";

export const listRewards = async ({ page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    prisma.reward.findMany({
      where: { isActive: true },
      distinct: ["title"],
      orderBy: { pointsCost: "asc" },
      skip,
      take: limit,
    }),
    prisma.reward.count({ where: { isActive: true } }),
  ]);

  const data = items.map((reward) => ({
    ...reward,
    stockInfo: reward.stock === -1 ? "unlimited" : reward.stock,
  }));

  return { items: data, total, page, limit };
};

export const getReward = async (id) => {
  const reward = await prisma.reward.findUnique({ where: { id } });
  if (!reward) throw new AppError("Reward not found", 404);
  return reward;
};

export const createReward = async ({ title, description, pointsCost, imageUrl, stock }) => {
  return prisma.reward.create({
    data: {
      title,
      description,
      pointsCost: Number(pointsCost),
      imageUrl: imageUrl || null,
      stock: stock === undefined || stock === null ? -1 : Number(stock),
    },
  });
};

export const updateReward = async (id, data) => {
  await getReward(id);
  return prisma.reward.update({
    where: { id },
    data: {
      ...(data.title !== undefined ? { title: data.title } : {}),
      ...(data.description !== undefined ? { description: data.description } : {}),
      ...(data.pointsCost !== undefined ? { pointsCost: Number(data.pointsCost) } : {}),
      ...(data.imageUrl !== undefined ? { imageUrl: data.imageUrl } : {}),
      ...(data.stock !== undefined ? { stock: Number(data.stock) } : {}),
      ...(data.isActive !== undefined ? { isActive: Boolean(data.isActive) } : {}),
    },
  });
};

export const deleteReward = async (id) => {
  await getReward(id);
  await prisma.reward.update({
    where: { id },
    data: { isActive: false },
  });
  return { message: "Reward removed" };
};

export const redeemReward = async (userId, rewardId) => {
  const [reward, user] = await Promise.all([
    prisma.reward.findUnique({ where: { id: rewardId } }),
    prisma.user.findUnique({ where: { id: userId } }),
  ]);

  if (!reward) throw new AppError("Reward not found", 404);
  if (!reward.isActive) throw new AppError("Reward is not active", 400);
  if (reward.stock !== -1 && reward.stock <= 0) throw new AppError("Reward out of stock", 400);
  if (!user || user.totalPoints < reward.pointsCost) throw new AppError("Insufficient points", 400);

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { totalPoints: { decrement: reward.pointsCost } },
    select: { id: true, totalPoints: true },
  });

  await prisma.pointTransaction.create({
    data: {
      userId,
      type: "REDEEMED",
      amount: -reward.pointsCost,
      description: `Redeemed: ${reward.title}`,
    },
  });

  if (reward.stock !== -1) {
    await prisma.reward.update({
      where: { id: rewardId },
      data: { stock: { decrement: 1 } },
    });
  }

  const redemption = await prisma.rewardRedemption.create({
    data: {
      userId,
      rewardId,
      pointsSpent: reward.pointsCost,
      status: "PENDING",
      redeemedAt: new Date(),
    },
    include: { reward: true },
  });

  await prisma.notification.create({
    data: {
      userId,
      type: "REWARD",
      title: "Redemption requested",
      body: `Your request for ${reward.title} is being processed.`,
    },
  });

  return { redemption, remainingPoints: updatedUser.totalPoints };
};

export const getMyRedemptions = async (userId, { page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    prisma.rewardRedemption.findMany({
      where: { userId },
      orderBy: { redeemedAt: "desc" },
      skip,
      take: limit,
      include: {
        reward: {
          select: { title: true, imageUrl: true },
        },
      },
    }),
    prisma.rewardRedemption.count({ where: { userId } }),
  ]);

  return { items, total, page, limit };
};

export const getAllRedemptions = async ({ status, page = 1, limit = 20 }) => {
  const where = status ? { status } : {};
  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    prisma.rewardRedemption.findMany({
      where,
      orderBy: { redeemedAt: "desc" },
      skip,
      take: limit,
      include: {
        user: { select: { username: true, email: true } },
        reward: { select: { title: true } },
      },
    }),
    prisma.rewardRedemption.count({ where }),
  ]);

  return { items, total, page, limit };
};

export const updateRedemptionStatus = async (adminId, redemptionId, status, notes) => {
  if (!["APPROVED", "REJECTED", "FULFILLED"].includes(status)) {
    throw new AppError("Invalid status", 400);
  }

  const redemption = await prisma.rewardRedemption.findUnique({
    where: { id: redemptionId },
    include: { reward: true, user: true },
  });
  if (!redemption) throw new AppError("Redemption not found", 404);

  if (status === "REJECTED" && redemption.status === "PENDING") {
    await prisma.user.update({
      where: { id: redemption.userId },
      data: { totalPoints: { increment: redemption.pointsSpent } },
    });
    await prisma.pointTransaction.create({
      data: {
        userId: redemption.userId,
        type: "ADJUSTED",
        amount: redemption.pointsSpent,
        description: `Refund: ${redemption.reward.title} redemption rejected`,
      },
    });
  }

  const updated = await prisma.rewardRedemption.update({
    where: { id: redemptionId },
    data: { status },
    include: {
      reward: { select: { title: true } },
      user: { select: { id: true, username: true } },
    },
  });

  await prisma.notification.create({
    data: {
      userId: redemption.userId,
      type: "REWARD",
      title: `Redemption ${status}`,
      body: `Your ${redemption.reward.title} redemption has been ${status}.${notes ? ` ${notes}` : ""}`,
    },
  });

  return updated;
};
