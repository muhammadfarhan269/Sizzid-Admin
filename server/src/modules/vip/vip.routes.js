const express = require("express");
const controller = require("./vip.controller");

const router = express.Router();

// GET    /api/v1/vip/me                 -> my vip tier/progress
// GET    /api/v1/vip/tiers              -> list tier benefits
// PATCH  /api/v1/vip/users/:id          -> update user vip tier (admin only)
router.get("/", controller.comingSoon);
router.get("/me", controller.comingSoon);
router.get("/tiers", controller.comingSoon);
router.patch("/users/:id", controller.comingSoon);

module.exports = router;
