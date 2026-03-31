const express = require("express");
const controller = require("./admin.controller");

const router = express.Router();

// GET    /api/v1/admin/dashboard       -> dashboard stats
// GET    /api/v1/admin/notifications   -> admin notifications
// POST   /api/v1/admin/notifications   -> create notification broadcast
// GET    /api/v1/admin/audit-logs      -> admin audit logs
router.get("/", controller.comingSoon);
router.get("/dashboard", controller.comingSoon);
router.get("/notifications", controller.comingSoon);
router.post("/notifications", controller.comingSoon);
router.get("/audit-logs", controller.comingSoon);

module.exports = router;
