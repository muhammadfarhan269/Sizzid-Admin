import express from "express";
import { requireAuth, requireAdmin } from "../../middleware/auth.js";
import { validateRequest } from "../../middleware/validate.js";
import { createGameRules, submitSessionRules } from "./games.validation.js";
import {
  listGamesController,
  listHotGamesController,
  getGameController,
  createGameController,
  updateGameController,
  deleteGameController,
  toggleHotController,
  toggleActiveController,
  submitGameSessionController,
  listTournamentsController,
  getTournamentController,
  createTournamentController,
  joinTournamentController,
  submitTournamentScoreController,
} from "./games.controller.js";

const router = express.Router();

router.get("/", listGamesController);
router.get("/hot", listHotGamesController);
router.get("/tournaments", listTournamentsController);
router.get("/tournaments/:id", getTournamentController);
router.get("/:id", getGameController);

router.post("/", requireAdmin, createGameRules, validateRequest, createGameController);
router.put("/:id", requireAdmin, updateGameController);
router.delete("/:id", requireAdmin, deleteGameController);
router.patch("/:id/hot", requireAdmin, toggleHotController);
router.patch("/:id/active", requireAdmin, toggleActiveController);
router.post("/:id/session", requireAuth, submitSessionRules, validateRequest, submitGameSessionController);

router.post("/tournaments", requireAdmin, createTournamentController);
router.post("/tournaments/:id/join", requireAuth, joinTournamentController);
router.post("/tournaments/:id/submit", requireAuth, submitTournamentScoreController);

export default router;
