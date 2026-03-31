import { body } from "express-validator";

export const createGameRules = [
  body("title").isLength({ min: 2, max: 100 }).withMessage("Title must be 2-100 characters"),
  body("category")
    .isIn(["PUZZLE", "ARCADE", "STRATEGY", "TRIVIA", "SPORTS", "OTHER"])
    .withMessage("Invalid category"),
  body("gameUrl").isURL().withMessage("Valid gameUrl is required"),
];

export const submitSessionRules = [
  body("score").isInt({ min: 0 }).withMessage("Score must be an integer >= 0"),
  body("duration").isInt({ min: 1 }).withMessage("Duration must be an integer >= 1"),
];
