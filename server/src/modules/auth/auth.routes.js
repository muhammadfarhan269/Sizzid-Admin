import express from "express";
import { requireAuth } from "../../middleware/auth.js";
import { validateRequest } from "../../middleware/validate.js";
import {
  registerRules,
  loginRules,
  forgotPasswordRules,
  verifyOtpRules,
  resetPasswordRules,
} from "./auth.validation.js";
import {
  register,
  login,
  adminLogin,
  refresh,
  logoutUser,
  forgotPasswordController,
  verifyOtpController,
  resetPasswordController,
  me,
} from "./auth.controller.js";

const router = express.Router();

router.post("/register", registerRules, validateRequest, register);
router.post("/login", loginRules, validateRequest, login);
router.post("/admin/login", loginRules, validateRequest, adminLogin);
router.post("/refresh", refresh);
router.post("/logout", requireAuth, logoutUser);
router.post("/forgot-password", forgotPasswordRules, validateRequest, forgotPasswordController);
router.post("/verify-otp", verifyOtpRules, validateRequest, verifyOtpController);
router.post("/reset-password", resetPasswordRules, validateRequest, resetPasswordController);
router.get("/me", requireAuth, me);

export default router;
