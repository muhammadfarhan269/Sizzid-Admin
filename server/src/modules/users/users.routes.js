import express from "express";
import notificationsRoutes from "./notifications.routes.js";
import { requireAuth } from "../../middleware/auth.js";
import {
  changePasswordController,
  getMyProfileController,
  getMyStatsController,
  updateMyProfileController,
} from "./users.controller.js";

const router = express.Router();

router.use("/", notificationsRoutes);
router.get("/profile", requireAuth, getMyProfileController);
router.put("/profile", requireAuth, updateMyProfileController);
router.put("/change-password", requireAuth, changePasswordController);
router.get("/stats", requireAuth, getMyStatsController);

export default router;
