import express from "express";
import { requireAdmin } from "../../middleware/auth.js";
import {
  createPromotionController,
  deletePromotionController,
  getPromotionController,
  listActivePromotionsController,
  listPromotionsController,
  togglePromotionController,
  updatePromotionController,
} from "./promotions.controller.js";

const router = express.Router();

router.get("/", listPromotionsController);
router.get("/active", listActivePromotionsController);
router.get("/:id", getPromotionController);

router.post("/", requireAdmin, createPromotionController);
router.put("/:id", requireAdmin, updatePromotionController);
router.delete("/:id", requireAdmin, deletePromotionController);
router.patch("/:id/toggle", requireAdmin, togglePromotionController);

export default router;
