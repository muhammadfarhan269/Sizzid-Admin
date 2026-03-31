import { customAlphabet } from "nanoid";
import prisma from "../../config/db.js";
import redis from "../../config/redis.js";
import { AppError } from "../../utils/AppError.js";
import { hashPassword, comparePassword } from "../../utils/bcrypt.js";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../../utils/jwt.js";

const REFRESH_TTL = 604800;
const OTP_TTL = 600;
const OTP_VERIFIED_TTL = 900;
const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8);

const sanitizeUser = (user) => {
  const { passwordHash, ...safeUser } = user;
  return safeUser;
};

const storeRefreshToken = async (userId, refreshToken) => {
  await redis.set(`refresh:${userId}`, refreshToken, { ex: REFRESH_TTL });
};

const generateTokens = (user) => {
  const payload = { id: user.id, role: user.role, email: user.email };
  return {
    accessToken: signAccessToken(payload),
    refreshToken: signRefreshToken(payload),
  };
};

const getStreakCount = (lastLoginAt, currentStreak) => {
  const now = new Date();
  if (!lastLoginAt) return 1;

  const last = new Date(lastLoginAt);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const lastDay = new Date(last.getFullYear(), last.getMonth(), last.getDate());

  if (lastDay.getTime() === today.getTime()) return currentStreak || 1;
  if (lastDay.getTime() === yesterday.getTime()) return (currentStreak || 0) + 1;
  return 1;
};

export const registerPlayer = async (email, username, password) => {
  const existingEmail = await prisma.user.findUnique({ where: { email } });
  if (existingEmail) throw new AppError("Email already in use", 409);

  const existingUsername = await prisma.user.findUnique({ where: { username } });
  if (existingUsername) throw new AppError("Username already taken", 409);

  const referralCode = `SZ${nanoid()}`;
  const passwordHash = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      username,
      passwordHash,
      role: "PLAYER",
      vipTier: "BRONZE",
      referralCode,
    },
  });

  const { accessToken, refreshToken } = generateTokens(user);
  await storeRefreshToken(user.id, refreshToken);

  return {
    user: sanitizeUser(user),
    accessToken,
    refreshToken,
  };
};

export const loginPlayer = async (email, password) => {
  const user = await prisma.user.findFirst({
    where: { email, role: "PLAYER" },
  });

  if (!user) throw new AppError("Invalid credentials", 401);
  if (user.isBanned) throw new AppError("Account suspended", 403);

  const ok = await comparePassword(password, user.passwordHash);
  if (!ok) throw new AppError("Invalid credentials", 401);

  const nextStreak = getStreakCount(user.lastLoginAt, user.loginStreak);
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      lastLoginAt: new Date(),
      loginStreak: nextStreak,
    },
  });

  const { accessToken, refreshToken } = generateTokens(updatedUser);
  await storeRefreshToken(updatedUser.id, refreshToken);

  return {
    user: sanitizeUser(updatedUser),
    accessToken,
    refreshToken,
  };
};

export const loginAdmin = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !["ADMIN", "SUPER_ADMIN"].includes(user.role)) {
    throw new AppError("Access denied", 403);
  }

  const ok = await comparePassword(password, user.passwordHash);
  if (!ok) throw new AppError("Invalid credentials", 401);

  const { accessToken, refreshToken } = generateTokens(user);
  await storeRefreshToken(user.id, refreshToken);

  return {
    user: sanitizeUser(user),
    accessToken,
    refreshToken,
  };
};

export const refreshAccessToken = async (refreshToken) => {
  if (!refreshToken) throw new AppError("Session expired", 401);

  const payload = verifyRefreshToken(refreshToken);
  const stored = await redis.get(`refresh:${payload.id}`);
  if (!stored || stored !== refreshToken) throw new AppError("Session expired", 401);

  const accessToken = signAccessToken({
    id: payload.id,
    role: payload.role,
    email: payload.email,
  });

  return { accessToken };
};

export const logout = async (userId) => {
  await redis.del(`refresh:${userId}`);
  return { message: "Logged out successfully" };
};

export const forgotPassword = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (user) {
    const otp = String(Math.floor(1000 + Math.random() * 9000));
    await redis.set(`otp:${email}`, otp, { ex: OTP_TTL });
    console.log(`OTP for ${email}: ${otp}`);
  }

  return { message: "If this email exists, an OTP has been sent" };
};

export const verifyOtp = async (email, otp) => {
  const storedOtp = await redis.get(`otp:${email}`);
  if (!storedOtp) throw new AppError("OTP expired or invalid", 400);
  const normalizedStoredOtp = String(storedOtp).trim().replace(/\D/g, "");
  const normalizedOtp = String(otp).trim().replace(/\D/g, "");
  if (normalizedStoredOtp !== normalizedOtp) throw new AppError("Invalid OTP", 400);

  await redis.set(`otp_verified:${email}`, "true", { ex: OTP_VERIFIED_TTL });
  return { message: "OTP verified" };
};

export const resetPassword = async (email, otp, newPassword) => {
  const storedOtp = await redis.get(`otp:${email}`);
  const otpVerified = await redis.get(`otp_verified:${email}`);
  const normalizedStoredOtp = String(storedOtp || "").trim().replace(/\D/g, "");
  const normalizedOtp = String(otp).trim().replace(/\D/g, "");

  if (!storedOtp || normalizedStoredOtp !== normalizedOtp) {
    throw new AppError("OTP expired or invalid", 400);
  }
  if (!otpVerified) throw new AppError("OTP expired or invalid", 400);

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new AppError("OTP expired or invalid", 400);

  const passwordHash = await hashPassword(newPassword);
  await prisma.user.update({
    where: { id: user.id },
    data: { passwordHash },
  });

  await redis.del(`otp:${email}`);
  await redis.del(`otp_verified:${email}`);
  await redis.del(`refresh:${user.id}`);

  return { message: "Password reset successful" };
};

export const getMe = async (userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new AppError("User not found", 404);
  return sanitizeUser(user);
};
