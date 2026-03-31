const express = require("express");
const controller = require("./approvals.controller");

const router = express.Router();

// GET    /api/v1/approvals              -> list approvals (admin)
// GET    /api/v1/approvals/:id          -> get approval details
// POST   /api/v1/approvals              -> create approval request
// PATCH  /api/v1/approvals/:id/review   -> approve/reject request (admin)
router.get("/", controller.comingSoon);
router.get("/:id", controller.comingSoon);
router.post("/", controller.comingSoon);
router.patch("/:id/review", controller.comingSoon);

module.exports = router;
