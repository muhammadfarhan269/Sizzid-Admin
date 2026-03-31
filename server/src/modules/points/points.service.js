import prisma from "../../config/db.js";
import { AppError } from "../../utils/AppError.js";

export const getMyPoints = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      totalPoints: true,
      lifetimePoints: true,
      vipTier: true,
    },
  });
  if (!user) throw new AppError("User not found", 404);
  return user;
};

export const getPointHistory = async (userId, { page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    prisma.pointTransaction.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.pointTransaction.count({ where: { userId } }),
  ]);

  return { items, total, page, limit };
};

export const adminAdjustPoints = async (adminId, userId, amount, reason) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, totalPoints: true, lifetimePoints: true },
  });
  if (!user) throw new AppError("User not found", 404);
  if (user.totalPoints + amount < 0) throw new AppError("Insufficient points", 400);

  const updated = await prisma.user.update({
    where: { id: userId },
    data: { totalPoints: { increment: amount } },
    select: { id: true, totalPoints: true, lifetimePoints: true, vipTier: true },
  });

  await prisma.pointTransaction.create({
    data: {
      userId,
      amount,
      type: "ADJUSTED",
      description: reason || `Adjusted by admin ${adminId}`,
    },
  });

  return updated;
};
