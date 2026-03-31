import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("Admin@1234", 10);

  await prisma.user.upsert({
    where: { email: 'admin@sizzld.com' },
    update: {},
    create: {
      email: 'admin@sizzld.com',
      username: 'sizzld_admin',
      passwordHash: hashedPassword,
      role: 'SUPER_ADMIN',
      referralCode: 'ADMIN001',
    },
  });

  await prisma.game.createMany({
    data: [
      {
        title: 'Mind Maze Masters',
        description: 'Fast-paced puzzle duels with score multipliers.',
        category: 'PUZZLE',
        gameUrl: 'https://games.sizzld.com/mind-maze-masters',
        isActive: true,
      },
      {
        title: 'Turbo Trivia Clash',
        description: 'Real-time trivia battles across 10 categories.',
        category: 'TRIVIA',
        gameUrl: 'https://games.sizzld.com/turbo-trivia-clash',
        isActive: true,
      },
      {
        title: 'Pixel Strike Arena',
        description: 'Top-down arcade shooter with skill-based matchmaking.',
        category: 'ARCADE',
        gameUrl: 'https://games.sizzld.com/pixel-strike-arena',
        isActive: true,
        isHot: true,
      },
      {
        title: 'Kingdom Tactics',
        description: 'Turn-based strategy game with global leaderboards.',
        category: 'STRATEGY',
        gameUrl: 'https://games.sizzld.com/kingdom-tactics',
        isActive: true,
      },
      {
        title: 'Street Kick Champions',
        description: 'Skill-based football penalty shootout competition.',
        category: 'SPORTS',
        gameUrl: 'https://games.sizzld.com/street-kick-champions',
        isActive: true,
        isHot: true,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.reward.createMany({
    data: [
      { title: "Bronze Reward Pack", pointsCost: 500 },
      { title: "Silver Mystery Box", pointsCost: 1500 },
      { title: "Gold Prize Voucher", pointsCost: 5000 },
    ],
    skipDuplicates: true,
  });

  const now = new Date();
  const inSevenDays = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const inThirtyDays = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

  await prisma.promotion.createMany({
    data: [
      {
        title: "Welcome Bonus",
        description: "2x points for first 7 days",
        type: "BONUS_POINTS",
        pointsBonus: 2,
        startsAt: now,
        endsAt: inSevenDays,
        isActive: true,
      },
      {
        title: "Weekend Warrior",
        description: "Bonus points every weekend",
        type: "SPECIAL_EVENT",
        pointsBonus: 200,
        startsAt: now,
        endsAt: inThirtyDays,
        isActive: true,
      },
    ],
    skipDuplicates: true,
  });

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
