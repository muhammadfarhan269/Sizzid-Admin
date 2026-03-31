import prisma from "../config/db.js";
import { verifyToken } from "../utils/jwt.js";
import { AppError } from "../utils/AppError.js";

const getBearerToken = (headerValue = "") => {
  if (!headerValue.startsWith("Bearer ")) return null;
  return headerValue.split(" ")[1];
};

export const requireAuth = async (req, res, next) => {
  try {
    const token = getBearerToken(req.headers.authorization || "");
    if (!token) {
      throw new AppError("Unauthorized", 401);
    }

    const payload = verifyToken(token);
    const user = await prisma.user.findUnique({
      where: { id: payload.id },
    });

    if (!user || user.isBanned) {
      throw new AppError("Unauthorized", 401);
    }

    req.user = user;
    return next();
  } catch (err) {
    return next(err.isOperational ? err : new AppError("Invalid token", 401));
  }
};

export const requireAdmin = (req, res, next) => {
  requireAuth(req, res, async () => {
    if (!["ADMIN", "SUPER_ADMIN"].includes(req.user?.role)) {
      return next(new AppError("Forbidden", 403));
    }
    return next();
  });
};

export const requireSuperAdmin = (req, res, next) => {
  requireAuth(req, res, () => {
    if (req.user?.role !== "SUPER_ADMIN") {
      return next(new AppError("Forbidden", 403));
    }
    return next();
  });
};
