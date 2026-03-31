import { body } from "express-validator";

export const registerRules = [
  body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
  body("username")
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be 3-20 characters")
    .matches(/^[A-Za-z0-9_]+$/)
    .withMessage("Username must contain only letters, numbers, and underscores"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/[A-Z]/)
    .withMessage("Password must contain an uppercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain a number"),
];

export const loginRules = [
  body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
];

export const forgotPasswordRules = [
  body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
];

export const verifyOtpRules = [
  body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
  body("otp").isLength({ min: 4, max: 4 }).matches(/^\d{4}$/).withMessage("OTP must be 4 digits"),
];

export const resetPasswordRules = [
  body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
  body("otp").isLength({ min: 4, max: 4 }).withMessage("OTP must be 4 characters"),
  body("newPassword")
    .isLength({ min: 8 })
    .withMessage("New password must be at least 8 characters")
    .matches(/[A-Z]/)
    .withMessage("New password must contain an uppercase letter")
    .matches(/[0-9]/)
    .withMessage("New password must contain a number"),
];
