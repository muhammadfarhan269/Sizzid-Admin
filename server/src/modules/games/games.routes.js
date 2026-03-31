const express = require("express");
const controller = require("./games.controller");

const router = express.Router();

// GET    /api/v1/games              -> list all games
// GET    /api/v1/games/:id          -> get single game
// POST   /api/v1/games              -> create game (admin only)
// PUT    /api/v1/games/:id          -> update game (admin only)
// DELETE /api/v1/games/:id          -> delete game (admin only)
// PATCH  /api/v1/games/:id/hot      -> toggle hot status (admin only)
router.get("/", controller.comingSoon);
router.get("/:id", controller.comingSoon);
router.post("/", controller.comingSoon);
router.put("/:id", controller.comingSoon);
router.delete("/:id", controller.comingSoon);
router.patch("/:id/hot", controller.comingSoon);

module.exports = router;
