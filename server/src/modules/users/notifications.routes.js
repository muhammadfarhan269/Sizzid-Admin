import express from "express";
import { requireAuth } from "../../middleware/auth.js";
import {
  getMyNotificationsController,
  markAllAsReadController,
  markAsReadController,
} from "./users.controller.js";

const router = express.Router();

router.get("/notifications", requireAuth, getMyNotificationsController);
router.patch("/notifications/read-all", requireAuth, markAllAsReadController);
router.patch("/notifications/:id/read", requireAuth, markAsReadController);

export default router;
