import express from "express";
import { requireAuth } from "../../middleware/auth.js";
import {
  getGlobalLeaderboardController,
  getGameLeaderboardController,
  getTournamentLeaderboardController,
  getMyRankController,
} from "./leaderboard.controller.js";

const router = express.Router();

router.get("/global", getGlobalLeaderboardController);
router.get("/game/:gameId", getGameLeaderboardController);
router.get("/tournament/:id", getTournamentLeaderboardController);
router.get("/me", requireAuth, getMyRankController);

export default router;
