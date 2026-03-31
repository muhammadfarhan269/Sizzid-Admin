import prisma from "../../config/db.js";
import { AppError } from "../../utils/AppError.js";
import { checkAndUpdateVip } from "../vip/vip.service.js";

const REFERRER_BONUS = 200;
const REFEREE_BONUS = 100;

export const getMyReferrals = async (userId, { page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    prisma.affiliate.findMany({
      where: { referrerId: userId },
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        referred: {
          select: { username: true, createdAt: true, vipTier: true },
        },
      },
    }),
    prisma.affiliate.count({ where: { referrerId: userId } }),
  ]);
  return { items, total, page, limit };
};

export const getMyAffiliateStats = async (userId) => {
  const [totalReferrals, pointsTx, user] = await Promise.all([
    prisma.affiliate.count({ where: { referrerId: userId } }),
    prisma.pointTransaction.aggregate({
      where: { userId, type: "EARNED_REFERRAL" },
      _sum: { amount: true },
    }),
    prisma.user.findUnique({ where: { id: userId }, select: { referralCode: true } }),
  ]);

  return {
    totalReferrals,
    totalPointsEarned: pointsTx._sum.amount || 0,
    referralCode: user?.referralCode || null,
  };
};

export const getAllAffiliates = async ({ page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    prisma.affiliate.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        referrer: { select: { username: true } },
        referred: { select: { username: true } },
      },
    }),
    prisma.affiliate.count(),
  ]);
  return { items, total, page, limit };
};

export const claimReferralBonus = async (userId, referralCode) => {
  const [user, referrer, existingUse] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId }, select: { id: true, username: true } }),
    prisma.user.findUnique({ where: { referralCode }, select: { id: true, username: true } }),
    prisma.affiliate.findUnique({ where: { referredId: userId } }),
  ]);

  if (!referrer) throw new AppError("Invalid referral code", 400);
  if (referrer.id === userId) throw new AppError("Cannot use your own referral code", 400);
  if (existingUse) throw new AppError("Already used a referral code", 409);

  await prisma.affiliate.create({
    data: {
      referrerId: referrer.id,
      referredId: userId,
      pointsAwarded: REFERRER_BONUS,
    },
  });

  await prisma.user.update({
    where: { id: referrer.id },
    data: {
      totalPoints: { increment: REFERRER_BONUS },
      lifetimePoints: { increment: REFERRER_BONUS },
    },
  });
  await prisma.pointTransaction.create({
    data: {
      userId: referrer.id,
      type: "EARNED_REFERRAL",
      amount: REFERRER_BONUS,
      description: `Referral bonus from ${user?.username || "new user"}`,
    },
  });

  await prisma.user.update({
    where: { id: userId },
    data: {
      totalPoints: { increment: REFEREE_BONUS },
      lifetimePoints: { increment: REFEREE_BONUS },
    },
  });
  await prisma.pointTransaction.create({
    data: {
      userId,
      type: "EARNED_REFERRAL",
      amount: REFEREE_BONUS,
      description: "Referral signup bonus",
    },
  });

  await checkAndUpdateVip(referrer.id);
  await checkAndUpdateVip(userId);

  await prisma.notification.create({
    data: {
      userId: referrer.id,
      type: "SYSTEM",
      title: "Referral bonus earned!",
      body: `${user?.username || "A user"} joined using your referral code. You earned 200 points!`,
    },
  });

  return { message: "Referral bonus claimed", pointsEarned: REFEREE_BONUS };
};
