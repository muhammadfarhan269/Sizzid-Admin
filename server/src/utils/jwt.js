const jwt = require("jsonwebtoken");
const env = require("../config/env");

const signAccessToken = (payload) =>
  jwt.sign(payload, env.jwtAccessSecret, { expiresIn: "15m" });

const signRefreshToken = (payload) =>
  jwt.sign(payload, env.jwtRefreshSecret, { expiresIn: "7d" });

const verifyToken = (token) => jwt.verify(token, env.jwtAccessSecret);

module.exports = {
  signAccessToken,
  signRefreshToken,
  verifyToken,
};
