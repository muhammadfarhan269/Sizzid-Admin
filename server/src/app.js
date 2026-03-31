import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import authRoutes from "./modules/auth/auth.routes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL || "http://localhost:3000",
      process.env.ADMIN_URL || "http://localhost:3001",
    ],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

const comingSoon = (req, res) => res.status(200).json({ success: true, message: "coming soon" });

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", comingSoon);
app.use("/api/v1/games", comingSoon);
app.use("/api/v1/leaderboard", comingSoon);
app.use("/api/v1/points", comingSoon);
app.use("/api/v1/rewards", comingSoon);
app.use("/api/v1/vip", comingSoon);
app.use("/api/v1/promotions", comingSoon);
app.use("/api/v1/approvals", comingSoon);
app.use("/api/v1/support", comingSoon);
app.use("/api/v1/affiliates", comingSoon);
app.use("/api/v1/admin", comingSoon);

app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "ok" });
});

app.use(errorHandler);

export default app;
