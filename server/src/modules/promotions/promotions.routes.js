const express = require("express");
const controller = require("./promotions.controller");

const router = express.Router();

// GET    /api/v1/promotions           -> list active promotions
// GET    /api/v1/promotions/:id       -> promotion details
// POST   /api/v1/promotions           -> create promotion (admin only)
// PUT    /api/v1/promotions/:id       -> update promotion (admin only)
// DELETE /api/v1/promotions/:id       -> delete promotion (admin only)
router.get("/", controller.comingSoon);
router.get("/:id", controller.comingSoon);
router.post("/", controller.comingSoon);
router.put("/:id", controller.comingSoon);
router.delete("/:id", controller.comingSoon);

module.exports = router;
