const express = require("express");
const controller = require("./rewards.controller");

const router = express.Router();

// GET    /api/v1/rewards                  -> list active rewards
// GET    /api/v1/rewards/:id              -> get reward details
// POST   /api/v1/rewards                  -> create reward (admin only)
// PUT    /api/v1/rewards/:id              -> update reward (admin only)
// POST   /api/v1/rewards/:id/redeem       -> redeem reward
// GET    /api/v1/rewards/redemptions/me   -> my redemptions
router.get("/", controller.comingSoon);
router.get("/redemptions/me", controller.comingSoon);
router.get("/:id", controller.comingSoon);
router.post("/", controller.comingSoon);
router.put("/:id", controller.comingSoon);
router.post("/:id/redeem", controller.comingSoon);

module.exports = router;
