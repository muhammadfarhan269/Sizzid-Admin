const express = require("express");
const controller = require("./users.controller");

const router = express.Router();

// GET    /api/v1/users              -> list users (admin)
// GET    /api/v1/users/:id          -> get user profile
// PUT    /api/v1/users/:id          -> update user profile
// PATCH  /api/v1/users/:id/ban      -> ban/unban user (admin)
// PATCH  /api/v1/users/:id/active   -> activate/deactivate user (admin)
router.get("/", controller.comingSoon);
router.get("/:id", controller.comingSoon);
router.put("/:id", controller.comingSoon);
router.patch("/:id/ban", controller.comingSoon);
router.patch("/:id/active", controller.comingSoon);

module.exports = router;
