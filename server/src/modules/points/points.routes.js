import express from "express";
import { requireAdmin, requireAuth } from "../../middleware/auth.js";
import {
  adminAdjustPointsController,
  getMyPointsController,
  getPointHistoryController,
} from "./points.controller.js";

const router = express.Router();

router.get("/", requireAuth, getMyPointsController);
router.get("/history", requireAuth, getPointHistoryController);
router.post("/admin/adjust", requireAdmin, adminAdjustPointsController);

export default router;
