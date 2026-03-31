const { verifyToken } = require("../utils/jwt");

const getBearerToken = (headerValue = "") => {
  if (!headerValue.startsWith("Bearer ")) return null;
  return headerValue.split(" ")[1];
};

const requireAuth = (req, res, next) => {
  try {
    const token = getBearerToken(req.headers.authorization || "");
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    req.user = verifyToken(token);
    return next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

const requireAdmin = (req, res, next) => {
  requireAuth(req, res, () => {
    if (!["ADMIN", "SUPER_ADMIN"].includes(req.user?.role)) {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }
    return next();
  });
};

const requireSuperAdmin = (req, res, next) => {
  requireAuth(req, res, () => {
    if (req.user?.role !== "SUPER_ADMIN") {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }
    return next();
  });
};

module.exports = { requireAuth, requireAdmin, requireSuperAdmin };
