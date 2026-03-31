import express from "express";
import notificationsRoutes from "./notifications.routes.js";

const router = express.Router();

router.use("/", notificationsRoutes);

export default router;
