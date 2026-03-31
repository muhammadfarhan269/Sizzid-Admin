const { PrismaClient, UserRole, GameCategory, PromoType } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const prisma = new PrismaClient();

async function main() {
  const adminPasswordHash = await bcrypt.hash("Admin@1234", 10);

  await prisma.user.upsert({
    where: { email: "admin@sizzld.com" },
    update: {},
    create: {
      email: "admin@sizzld.com",
      username: "sizzld_admin",
      passwordHash: adminPasswordHash,
      role: UserRole.SUPER_ADMIN,
      referralCode: `SIZZLD-${uuidv4().slice(0, 8).toUpperCase()}`,
    },
  });

  const games = [
    {
      title: "Mind Maze Masters",
      description: "Fast-paced puzzle duels with score multipliers.",
      category: GameCategory.PUZZLE,
      gameUrl: "https://games.sizzld.com/mind-maze-masters",
    },
    {
      title: "Neon Drift Blitz",
      description: "Arcade reaction challenge with weekly ladders.",
      category: GameCategory.ARCADE,
      gameUrl: "https://games.sizzld.com/neon-drift-blitz",
    },
    {
      title: "Quiz Clash Arena",
      description: "Competitive trivia battles across multiple topics.",
      category: GameCategory.TRIVIA,
      gameUrl: "https://games.sizzld.com/quiz-clash-arena",
    },
    {
      title: "Tactic Titans",
      description: "Turn-based strategy skirmishes for ranked play.",
      category: GameCategory.STRATEGY,
      gameUrl: "https://games.sizzld.com/tactic-titans",
    },
    {
      title: "Street Goal Showdown",
      description: "Skill-shot sports mini game with streak rewards.",
      category: GameCategory.SPORTS,
      gameUrl: "https://games.sizzld.com/street-goal-showdown",
    },
  ];

  for (const game of games) {
    await prisma.game.upsert({
      where: { gameUrl: game.gameUrl },
      update: game,
      create: game,
    });
  }

  const rewards = [
    { title: "Bronze Reward Pack", pointsCost: 500 },
    { title: "Silver Mystery Box", pointsCost: 1500 },
    { title: "Gold Prize Voucher", pointsCost: 5000 },
  ];

  for (const reward of rewards) {
    await prisma.reward.upsert({
      where: { title: reward.title },
      update: reward,
      create: reward,
    });
  }

  const now = new Date();
  const inSevenDays = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const inThirtyDays = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

  const promotions = [
    {
      title: "Welcome Bonus",
      description: "2x points for first 7 days",
      type: PromoType.BONUS_POINTS,
      pointsBonus: 2,
      startsAt: now,
      endsAt: inSevenDays,
      isActive: true,
    },
    {
      title: "Weekend Warrior",
      description: "Bonus points every weekend",
      type: PromoType.SPECIAL_EVENT,
      pointsBonus: 200,
      startsAt: now,
      endsAt: inThirtyDays,
      isActive: true,
    },
  ];

  for (const promo of promotions) {
    await prisma.promotion.upsert({
      where: { title: promo.title },
      update: promo,
      create: promo,
    });
  }

  console.log("Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
