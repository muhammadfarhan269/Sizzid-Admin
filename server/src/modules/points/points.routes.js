const express = require("express");
const controller = require("./points.controller");

const router = express.Router();

// GET    /api/v1/points/me                 -> current user point balance
// GET    /api/v1/points/transactions       -> current user point transactions
// POST   /api/v1/points/adjust             -> admin manual adjustment
router.get("/", controller.comingSoon);
router.get("/me", controller.comingSoon);
router.get("/transactions", controller.comingSoon);
router.post("/adjust", controller.comingSoon);

module.exports = router;
