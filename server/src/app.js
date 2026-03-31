const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const env = require("./config/env");
const errorHandler = require("./middleware/errorHandler");

const authRoutes = require("./modules/auth/auth.routes");
const usersRoutes = require("./modules/users/users.routes");
const gamesRoutes = require("./modules/games/games.routes");
const leaderboardRoutes = require("./modules/leaderboard/leaderboard.routes");
const pointsRoutes = require("./modules/points/points.routes");
const rewardsRoutes = require("./modules/rewards/rewards.routes");
const vipRoutes = require("./modules/vip/vip.routes");
const promotionsRoutes = require("./modules/promotions/promotions.routes");
const approvalsRoutes = require("./modules/approvals/approvals.routes");
const supportRoutes = require("./modules/support/support.routes");
const affiliatesRoutes = require("./modules/affiliates/affiliates.routes");
const adminRoutes = require("./modules/admin/admin.routes");

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: [env.clientUrl, env.adminUrl],
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

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/games", gamesRoutes);
app.use("/api/v1/leaderboard", leaderboardRoutes);
app.use("/api/v1/points", pointsRoutes);
app.use("/api/v1/rewards", rewardsRoutes);
app.use("/api/v1/vip", vipRoutes);
app.use("/api/v1/promotions", promotionsRoutes);
app.use("/api/v1/approvals", approvalsRoutes);
app.use("/api/v1/support", supportRoutes);
app.use("/api/v1/affiliates", affiliatesRoutes);
app.use("/api/v1/admin", adminRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "ok" });
});

app.use(errorHandler);

module.exports = app;
