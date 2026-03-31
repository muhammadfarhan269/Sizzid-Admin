import express from "express";
import { requireAdmin, requireAuth } from "../../middleware/auth.js";
import {
  createTicketController,
  getAllTicketsController,
  getMyTicketsController,
  getTicketController,
  sendMessageController,
  updateTicketPriorityController,
  updateTicketStatusController,
} from "./support.controller.js";

const router = express.Router();

router.post("/", requireAuth, createTicketController);
router.get("/mine", requireAuth, getMyTicketsController);
router.get("/admin/all", requireAdmin, getAllTicketsController);
router.patch("/admin/:id/status", requireAdmin, updateTicketStatusController);
router.patch("/admin/:id/priority", requireAdmin, updateTicketPriorityController);
router.get("/:id", requireAuth, getTicketController);
router.post("/:id/message", requireAuth, sendMessageController);

export default router;
