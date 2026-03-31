import prisma from "../../config/db.js";
import redis from "../../config/redis.js";
import { AppError } from "../../utils/AppError.js";

const CACHE_TTL = 60;

const paginate = (page, limit) => ({
  skip: (page - 1) * limit,
  take: limit,
});

export const getGlobalLeaderboard = async ({ page = 1, limit = 50 }) => {
  const key = `leaderboard:global:${page}`;
  const cached = await redis.get(key);
  if (cached) return cached;

  const { skip, take } = paginate(page, limit);
  const users = await prisma.user.findMany({
    where: { isActive: true, isBanned: false },
    orderBy: [{ totalPoints: "desc" }, { createdAt: "asc" }],
    skip,
    take,
    select: {
      id: true,
      username: true,
      avatarUrl: true,
      totalPoints: true,
      vipTier: true,
    },
  });

  const data = users.map((user, idx) => ({
    rank: skip + idx + 1,
    username: user.username,
    avatarUrl: user.avatarUrl,
    totalPoints: user.totalPoints,
    vipTier: user.vipTier,
  }));

  await redis.set(key, data, { ex: CACHE_TTL });
  return data;
};

export const getGameLeaderboard = async (gameId, { page = 1, limit = 50 }) => {
  const game = await prisma.game.findUnique({ where: { id: gameId }, select: { id: true } });
  if (!game) throw new AppError("Game not found", 404);

  const key = `leaderboard:game:${gameId}:${page}`;
  const cached = await redis.get(key);
  if (cached) return cached;

  const grouped = await prisma.gameSession.groupBy({
    by: ["userId"],
    where: { gameId },
    _max: { score: true },
    orderBy: { _max: { score: "desc" } },
  });

  const start = (page - 1) * limit;
  const rows = grouped.slice(start, start + limit);
  const userIds = rows.map((r) => r.userId);

  const users = userIds.length
    ? await prisma.user.findMany({
        where: { id: { in: userIds }, isActive: true, isBanned: false },
        select: { id: true, username: true, avatarUrl: true, vipTier: true },
      })
    : [];
  const byId = new Map(users.map((u) => [u.id, u]));

  const data = rows
    .map((row, idx) => {
      const user = byId.get(row.userId);
      if (!user) return null;
      return {
        rank: start + idx + 1,
        userId: row.userId,
        username: user.username,
        avatarUrl: user.avatarUrl,
        vipTier: user.vipTier,
        score: row._max.score || 0,
      };
    })
    .filter(Boolean);

  await redis.set(key, data, { ex: CACHE_TTL });
  return data;
};

export const getTournamentLeaderboard = async (tournamentId) => {
  const tournament = await prisma.tournament.findUnique({
    where: { id: tournamentId },
    select: { id: true },
  });
  if (!tournament) throw new AppError("Tournament not found", 404);

  const entries = await prisma.tournamentEntry.findMany({
    where: { tournamentId },
    orderBy: { score: "desc" },
    include: {
      user: {
        select: { id: true, username: true, avatarUrl: true, vipTier: true },
      },
    },
  });

  return entries.map((entry, idx) => ({
    rank: idx + 1,
    entryId: entry.id,
    userId: entry.userId,
    username: entry.user.username,
    avatarUrl: entry.user.avatarUrl,
    vipTier: entry.user.vipTier,
    score: entry.score,
    joinedAt: entry.joinedAt,
  }));
};

export const getMyRank = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, username: true, totalPoints: true },
  });
  if (!user) throw new AppError("User not found", 404);

  const higherCount = await prisma.user.count({
    where: {
      isActive: true,
      isBanned: false,
      totalPoints: { gt: user.totalPoints },
    },
  });

  return {
    rank: higherCount + 1,
    totalPoints: user.totalPoints,
    username: user.username,
  };
};
