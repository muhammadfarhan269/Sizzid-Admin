const env = require("../config/env");

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal server error";

  if (err.code === "P2002") {
    statusCode = 409;
    message = "A record with this value already exists.";
  } else if (err.code === "P2025") {
    statusCode = 404;
    message = "Requested record was not found.";
  }

  return res.status(statusCode).json({
    success: false,
    message,
    ...(env.nodeEnv === "development" ? { stack: err.stack } : {}),
  });
};

module.exports = errorHandler;
