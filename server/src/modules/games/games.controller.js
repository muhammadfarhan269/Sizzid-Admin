import { success, paginated } from "../../utils/response.js";
import {
  listGames,
  listHotGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,
  toggleHot,
  toggleActive,
  submitGameSession,
  listTournaments,
  getTournament,
  createTournament,
  joinTournament,
  submitTournamentScore,
} from "./games.service.js";

const toNumber = (value, fallback) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

export const listGamesController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await listGames({
      category: req.query.category,
      search: req.query.search,
      page,
      limit,
    });
    return paginated(res, data.items, data.total, page, limit);
  } catch (err) {
    return next(err);
  }
};

export const listHotGamesController = async (req, res, next) => {
  try {
    const data = await listHotGames();
    return success(res, data, "Hot games");
  } catch (err) {
    return next(err);
  }
};

export const getGameController = async (req, res, next) => {
  try {
    const data = await getGame(req.params.id);
    return success(res, data, "Game details");
  } catch (err) {
    return next(err);
  }
};

export const createGameController = async (req, res, next) => {
  try {
    const data = await createGame(req.body);
    return success(res, data, "Game created", 201);
  } catch (err) {
    return next(err);
  }
};

export const updateGameController = async (req, res, next) => {
  try {
    const data = await updateGame(req.params.id, req.body);
    return success(res, data, "Game updated");
  } catch (err) {
    return next(err);
  }
};

export const deleteGameController = async (req, res, next) => {
  try {
    const data = await deleteGame(req.params.id);
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};

export const toggleHotController = async (req, res, next) => {
  try {
    const data = await toggleHot(req.params.id);
    return success(res, data, "Hot flag updated");
  } catch (err) {
    return next(err);
  }
};

export const toggleActiveController = async (req, res, next) => {
  try {
    const data = await toggleActive(req.params.id);
    return success(res, data, "Active flag updated");
  } catch (err) {
    return next(err);
  }
};

export const submitGameSessionController = async (req, res, next) => {
  try {
    const { score, duration } = req.body;
    const data = await submitGameSession(req.user.id, req.params.id, Number(score), Number(duration));
    return success(res, data, "Game session submitted");
  } catch (err) {
    return next(err);
  }
};

export const listTournamentsController = async (req, res, next) => {
  try {
    const data = await listTournaments({ status: req.query.status });
    return success(res, data, "Tournaments");
  } catch (err) {
    return next(err);
  }
};

export const getTournamentController = async (req, res, next) => {
  try {
    const data = await getTournament(req.params.id);
    return success(res, data, "Tournament details");
  } catch (err) {
    return next(err);
  }
};

export const createTournamentController = async (req, res, next) => {
  try {
    const data = await createTournament(req.body);
    return success(res, data, "Tournament created", 201);
  } catch (err) {
    return next(err);
  }
};

export const joinTournamentController = async (req, res, next) => {
  try {
    const data = await joinTournament(req.user.id, req.params.id);
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};

export const submitTournamentScoreController = async (req, res, next) => {
  try {
    const data = await submitTournamentScore(req.user.id, req.params.id, Number(req.body.score));
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};
