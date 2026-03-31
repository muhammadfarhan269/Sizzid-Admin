const express = require("express");
const controller = require("./affiliates.controller");

const router = express.Router();

// GET    /api/v1/affiliates/me            -> my affiliate stats
// GET    /api/v1/affiliates/referrals     -> list my referrals
// POST   /api/v1/affiliates/link          -> connect referral code
// GET    /api/v1/affiliates/admin         -> admin affiliate overview
router.get("/", controller.comingSoon);
router.get("/me", controller.comingSoon);
router.get("/referrals", controller.comingSoon);
router.post("/link", controller.comingSoon);
router.get("/admin", controller.comingSoon);

module.exports = router;
