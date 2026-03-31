import express from "express";
import { requireAdmin, requireAuth } from "../../middleware/auth.js";
import {
  createRewardController,
  deleteRewardController,
  getAllRedemptionsController,
  getMyRedemptionsController,
  getRewardController,
  listRewardsController,
  redeemRewardController,
  updateRedemptionStatusController,
  updateRewardController,
} from "./rewards.controller.js";

const router = express.Router();

router.get("/", listRewardsController);
router.get("/redemptions/mine", requireAuth, getMyRedemptionsController);
router.get("/redemptions/all", requireAdmin, getAllRedemptionsController);
router.patch("/redemptions/:id", requireAdmin, updateRedemptionStatusController);
router.get("/:id", getRewardController);

router.post("/", requireAdmin, createRewardController);
router.put("/:id", requireAdmin, updateRewardController);
router.delete("/:id", requireAdmin, deleteRewardController);
router.post("/:id/redeem", requireAuth, redeemRewardController);

export default router;
