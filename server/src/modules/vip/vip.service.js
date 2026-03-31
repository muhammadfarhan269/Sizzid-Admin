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
