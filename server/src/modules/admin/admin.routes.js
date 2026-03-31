import express from "express";
import { requireAdmin, requireSuperAdmin } from "../../middleware/auth.js";
import {
  banUserController,
  changeUserRoleController,
  createApprovalController,
  getApprovalController,
  getDashboardStatsController,
  getUserDetailController,
  listApprovalsController,
  listUsersController,
  reviewApprovalController,
  unbanUserController,
} from "./admin.controller.js";

const router = express.Router();

router.get("/dashboard/stats", requireAdmin, getDashboardStatsController);

router.get("/users", requireAdmin, listUsersController);
router.get("/users/:id", requireAdmin, getUserDetailController);
router.patch("/users/:id/ban", requireAdmin, banUserController);
router.patch("/users/:id/unban", requireAdmin, unbanUserController);
router.patch("/users/:id/role", requireSuperAdmin, changeUserRoleController);

router.get("/approvals", requireAdmin, listApprovalsController);
router.get("/approvals/:id", requireAdmin, getApprovalController);
router.post("/approvals", requireAdmin, createApprovalController);
router.patch("/approvals/:id", requireAdmin, reviewApprovalController);

export default router;
