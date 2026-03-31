import prisma from "../../config/db.js";
import { AppError } from "../../utils/AppError.js";
import { checkAndUpdateVip } from "../vip/vip.service.js";

export const listGames = async ({ category, search, page = 1, limit = 20 }) => {
  const where = {
    ...(category ? { category } : {}),
    ...(search ? { title: { contains: search, mode: "insensitive" } } : {}),
  };

  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    prisma.game.findMany({
      where,
      orderBy: [{ activePlayers: "desc" }, { createdAt: "desc" }],
      skip,
      take: limit,
    }),
    prisma.game.count({ where }),
  ]);

  return { items, total, page, limit };
};

export const listHotGames = async () => {
  return prisma.game.findMany({
    where: { isHot: true, isActive: true },
    orderBy: [{ activePlayers: "desc" }],
  });
};

export const getGame = async (id) => {
  const game = await prisma.game.findUnique({ where: { id } });
  if (!game) throw new AppError("Game not found", 404);
  return game;
};

export const createGame = async ({ title, description, category, thumbnailUrl, gameUrl }) => {
  return prisma.game.create({
    data: { title, description, category, thumbnailUrl, gameUrl },
  });
};

export const updateGame = async (id, data) => {
  await getGame(id);
  return prisma.game.update({
    where: { id },
    data,
  });
};

export const deleteGame = async (id) => {
  await getGame(id);
  await prisma.game.delete({ where: { id } });
  return { message: "Game deleted" };
};

export const toggleHot = async (id) => {
  const game = await getGame(id);
  return prisma.game.update({
    where: { id },
    data: { isHot: !game.isHot },
  });
};

export const toggleActive = async (id) => {
  const game = await getGame(id);
  return prisma.game.update({
    where: { id },
    data: { isActive: !game.isActive },
  });
};

export const submitGameSession = async (userId, gameId, score, duration) => {
  const game = await getGame(gameId);

  const base = Math.floor(score / 10);
  const timeBonus = duration < 60 ? 10 : 0;
  const pointsEarned = Math.max(1, base + timeBonus);

  const now = new Date();
  const session = await prisma.gameSession.create({
    data: {
      userId,
      gameId,
      score,
      duration,
      pointsEarned,
      playedAt: now,
    },
  });

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      totalPoints: { increment: pointsEarned },
      lifetimePoints: { increment: pointsEarned },
    },
  });

  await prisma.pointTransaction.create({
    data: {
      userId,
      amount: pointsEarned,
      type: "EARNED_GAME",
      description: `Points earned from ${game.title}`,
    },
  });

  const last24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const activePlayers = await prisma.gameSession.groupBy({
    by: ["userId"],
    where: {
      gameId,
      playedAt: { gte: last24h },
    },
  });

  await prisma.game.update({
    where: { id: gameId },
    data: { activePlayers: activePlayers.length },
  });

  await checkAndUpdateVip(userId);

  return {
    session,
    pointsEarned,
    newTotal: updatedUser.totalPoints,
  };
};

export const listTournaments = async ({ status }) => {
  return prisma.tournament.findMany({
    where: status ? { status } : {},
    orderBy: { startAt: "asc" },
    include: { game: true },
  });
};

export const getTournament = async (id) => {
  const tournament = await prisma.tournament.findUnique({
    where: { id },
    include: {
      game: true,
      _count: { select: { entries: true } },
    },
  });
  if (!tournament) throw new AppError("Tournament not found", 404);
  return tournament;
};

export const createTournament = async ({
  title,
  gameId,
  startAt,
  endAt,
  prizePool,
  maxPlayers,
}) => {
  const game = await prisma.game.findUnique({ where: { id: gameId } });
  if (!game) throw new AppError("Game not found", 404);

  return prisma.tournament.create({
    data: {
      title,
      gameId,
      startAt: new Date(startAt),
      endAt: new Date(endAt),
      prizePool,
      maxPlayers,
      status: "UPCOMING",
    },
  });
};

export const joinTournament = async (userId, tournamentId) => {
  const tournament = await prisma.tournament.findUnique({
    where: { id: tournamentId },
    include: { _count: { select: { entries: true } } },
  });
  if (!tournament) throw new AppError("Tournament not found", 404);
  if (!["UPCOMING", "ACTIVE"].includes(tournament.status)) {
    throw new AppError("Tournament not open for joining", 400);
  }
  if (tournament._count.entries >= tournament.maxPlayers) {
    throw new AppError("Tournament is full", 400);
  }

  const existing = await prisma.tournamentEntry.findFirst({
    where: { tournamentId, userId },
  });
  if (existing) throw new AppError("Already joined tournament", 409);

  await prisma.tournamentEntry.create({
    data: {
      tournamentId,
      userId,
      joinedAt: new Date(),
    },
  });

  return { message: "Joined tournament" };
};

export const submitTournamentScore = async (userId, tournamentId, score) => {
  const entry = await prisma.tournamentEntry.findFirst({
    where: { userId, tournamentId },
  });
  if (!entry) throw new AppError("Tournament entry not found", 404);

  const bestScore = score > entry.score ? score : entry.score;
  await prisma.tournamentEntry.update({
    where: { id: entry.id },
    data: { score: bestScore },
  });

  const pointsEarned = Math.floor(score / 5);
  if (pointsEarned > 0) {
    await prisma.user.update({
      where: { id: userId },
      data: {
        totalPoints: { increment: pointsEarned },
        lifetimePoints: { increment: pointsEarned },
      },
    });
    await prisma.pointTransaction.create({
      data: {
        userId,
        amount: pointsEarned,
        type: "EARNED_TOURNAMENT",
        description: "Tournament score submission points",
      },
    });
    await checkAndUpdateVip(userId);
  }

  return { message: "Score submitted", score: bestScore };
};
