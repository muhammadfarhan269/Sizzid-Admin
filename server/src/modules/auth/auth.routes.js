const express = require("express");
const controller = require("./auth.controller");

const router = express.Router();

// POST   /api/v1/auth/register      -> register player
// POST   /api/v1/auth/login         -> login user/admin
// POST   /api/v1/auth/refresh       -> refresh access token
// POST   /api/v1/auth/logout        -> logout current session
// GET    /api/v1/auth/me            -> current authenticated user
router.get("", controller.comingSoon);
router.get("/", controller.comingSoon);
router.post("/register", controller.comingSoon);
router.post("/login", controller.comingSoon);
router.post("/refresh", controller.comingSoon);
router.post("/logout", controller.comingSoon);
router.get("/me", controller.comingSoon);

module.exports = router;
