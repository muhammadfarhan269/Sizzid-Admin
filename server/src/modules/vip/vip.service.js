import prisma from "../../config/db.js";

const resolveTier = (lifetimePoints) => {
  if (lifetimePoints >= 20000) return "PLATINUM";
  if (lifetimePoints >= 5000) return "GOLD";
  if (lifetimePoints >= 1000) return "SILVER";
  return "BRONZE";
};

export const checkAndUpdateVip = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, vipTier: true, lifetimePoints: true },
  });

  if (!user) return { tier: "BRONZE", upgraded: false };

  const tier = resolveTier(user.lifetimePoints);
  if (tier === user.vipTier) return { tier, upgraded: false };

  await prisma.user.update({
    where: { id: userId },
    data: { vipTier: tier },
  });

  await prisma.notification.create({
    data: {
      userId,
      type: "SYSTEM",
      title: "VIP Tier Upgrade!",
      body: `Congratulations! You've reached ${tier} tier.`,
    },
  });

  return { tier, upgraded: true };
};

export const getVipTiers = () => [
  { tier: "BRONZE", minPoints: 0, maxPoints: 999, multiplier: 1.0, color: "#CD7F32" },
  { tier: "SILVER", minPoints: 1000, maxPoints: 4999, multiplier: 1.25, color: "#C0C0C0" },
  { tier: "GOLD", minPoints: 5000, maxPoints: 19999, multiplier: 1.5, color: "#FFD700" },
  { tier: "PLATINUM", minPoints: 20000, maxPoints: null, multiplier: 2.0, color: "#E5E4E2" },
];

export const getMyVipTier = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { vipTier: true, lifetimePoints: true },
  });
  if (!user) return null;

  const tiers = getVipTiers();
  const current = tiers.find((t) => t.tier === user.vipTier) || tiers[0];
  const idx = tiers.findIndex((t) => t.tier === user.vipTier);
  const next = idx >= 0 && idx < tiers.length - 1 ? tiers[idx + 1] : null;
  const pointsToNextTier = next ? Math.max(0, next.minPoints - user.lifetimePoints) : null;

  return {
    vipTier: user.vipTier,
    lifetimePoints: user.lifetimePoints,
    currentTier: current,
    pointsToNextTier,
  };
};

export const getVipBenefits = () => ({
  BRONZE: ["basic access", "1x points"],
  SILVER: ["priority matchmaking", "1.25x points", "early tournament access"],
  GOLD: ["exclusive games", "1.5x points", "dedicated support"],
  PLATINUM: [
    "all benefits",
    "2x points",
    "custom profile badge",
    "VIP-only tournaments",
  ],
});
