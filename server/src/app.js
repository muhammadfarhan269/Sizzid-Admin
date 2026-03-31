import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import authRoutes from "./modules/auth/auth.routes.js";
import usersRoutes from "./modules/users/users.routes.js";
import gamesRoutes from "./modules/games/games.routes.js";
import leaderboardRoutes from "./modules/leaderboard/leaderboard.routes.js";
import pointsRoutes from "./modules/points/points.routes.js";
import rewardsRoutes from "./modules/rewards/rewards.routes.js";
import promotionsRoutes from "./modules/promotions/promotions.routes.js";
import affiliatesRoutes from "./modules/affiliates/affiliates.routes.js";
import supportRoutes from "./modules/support/support.routes.js";
import vipRoutes from "./modules/vip/vip.routes.js";
import adminRoutes from "./modules/admin/admin.routes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    return (
      req.headers["x-forwarded-for"]?.split(",")[0].trim() ||
      req.headers["x-real-ip"] ||
      req.ip ||
      "unknown"
    );
  },
});

app.get("/health", (req, res) => {
  return res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    version: "1.0.0",
  });
});

app.use(helmet());
const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.ADMIN_URL,
  process.env.PRODUCTION_CLIENT_URL,
  process.env.PRODUCTION_ADMIN_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", 1);
app.use(limiter);

const comingSoon = (req, res) => res.status(200).json({ success: true, message: "coming soon" });

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/games", gamesRoutes);
app.use("/api/v1/leaderboard", leaderboardRoutes);
app.use("/api/v1/points", pointsRoutes);
app.use("/api/v1/rewards", rewardsRoutes);
app.use("/api/v1/vip", vipRoutes);
app.use("/api/v1/promotions", promotionsRoutes);
app.use("/api/v1/approvals", comingSoon);
app.use("/api/v1/support", supportRoutes);
app.use("/api/v1/affiliates", affiliatesRoutes);
app.use("/api/v1/admin", adminRoutes);

app.use(errorHandler);

export default app;
