import express from "express";
import { requireAuth } from "../../middleware/auth.js";
import {
  getMyVipTierController,
  getVipBenefitsController,
  getVipTiersController,
} from "./vip.controller.js";

const router = express.Router();

router.get("/tiers", getVipTiersController);
router.get("/my-tier", requireAuth, getMyVipTierController);
router.get("/benefits", getVipBenefitsController);

export default router;
