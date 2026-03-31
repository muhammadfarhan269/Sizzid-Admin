const express = require("express");
const controller = require("./leaderboard.controller");

const router = express.Router();

// GET    /api/v1/leaderboard                -> global leaderboard
// GET    /api/v1/leaderboard/games/:gameId  -> leaderboard by game
// GET    /api/v1/leaderboard/tournaments/:tournamentId -> tournament leaderboard
router.get("/", controller.comingSoon);
router.get("/games/:gameId", controller.comingSoon);
router.get("/tournaments/:tournamentId", controller.comingSoon);

module.exports = router;
