import { success } from "../../utils/response.js";
import {
  getGlobalLeaderboard,
  getGameLeaderboard,
  getTournamentLeaderboard,
  getMyRank,
} from "./leaderboard.service.js";

const toNumber = (value, fallback) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

export const getGlobalLeaderboardController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 50);
    const data = await getGlobalLeaderboard({ page, limit });
    return success(res, data, "Global leaderboard");
  } catch (err) {
    return next(err);
  }
};

export const getGameLeaderboardController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 50);
    const data = await getGameLeaderboard(req.params.gameId, { page, limit });
    return success(res, data, "Game leaderboard");
  } catch (err) {
    return next(err);
  }
};

export const getTournamentLeaderboardController = async (req, res, next) => {
  try {
    const data = await getTournamentLeaderboard(req.params.id);
    return success(res, data, "Tournament leaderboard");
  } catch (err) {
    return next(err);
  }
};

export const getMyRankController = async (req, res, next) => {
  try {
    const data = await getMyRank(req.user.id);
    return success(res, data, "My rank");
  } catch (err) {
    return next(err);
  }
};
