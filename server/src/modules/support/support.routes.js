const express = require("express");
const controller = require("./support.controller");

const router = express.Router();

// GET    /api/v1/support/tickets             -> list my tickets / admin list
// POST   /api/v1/support/tickets             -> create ticket
// GET    /api/v1/support/tickets/:id         -> ticket details with messages
// POST   /api/v1/support/tickets/:id/messages -> send ticket message
// PATCH  /api/v1/support/tickets/:id/status  -> update status (admin)
router.get("/", controller.comingSoon);
router.get("/tickets", controller.comingSoon);
router.post("/tickets", controller.comingSoon);
router.get("/tickets/:id", controller.comingSoon);
router.post("/tickets/:id/messages", controller.comingSoon);
router.patch("/tickets/:id/status", controller.comingSoon);

module.exports = router;
