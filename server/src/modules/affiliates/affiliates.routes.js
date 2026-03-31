import express from "express";
import { requireAdmin, requireAuth } from "../../middleware/auth.js";
import {
  claimReferralBonusController,
  getAllAffiliatesController,
  getMyAffiliateStatsController,
  getMyReferralsController,
} from "./affiliates.controller.js";

const router = express.Router();

router.get("/my-referrals", requireAuth, getMyReferralsController);
router.get("/stats", requireAuth, getMyAffiliateStatsController);
router.get("/all", requireAdmin, getAllAffiliatesController);
router.post("/claim", requireAuth, claimReferralBonusController);

export default router;
