import { success } from "../../utils/response.js";
import {
  registerPlayer,
  loginPlayer,
  loginAdmin,
  refreshAccessToken,
  logout,
  forgotPassword,
  verifyOtp,
  resetPassword,
  getMe,
} from "./auth.service.js";

export const register = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const data = await registerPlayer(email, username, password);
    return success(res, data, "Registration successful");
  } catch (err) {
    return next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await loginPlayer(email, password);
    return success(res, data, "Login successful");
  } catch (err) {
    return next(err);
  }
};

export const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await loginAdmin(email, password);
    return success(res, data, "Admin login successful");
  } catch (err) {
    return next(err);
  }
};

export const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const data = await refreshAccessToken(refreshToken);
    return success(res, data, "Token refreshed");
  } catch (err) {
    return next(err);
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    const data = await logout(req.user.id);
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};

export const forgotPasswordController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const data = await forgotPassword(email);
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};

export const verifyOtpController = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    const data = await verifyOtp(email, otp);
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};

export const resetPasswordController = async (req, res, next) => {
  try {
    const { email, otp, newPassword } = req.body;
    const data = await resetPassword(email, otp, newPassword);
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};

export const me = async (req, res, next) => {
  try {
    const data = await getMe(req.user.id);
    return success(res, data, "User profile");
  } catch (err) {
    return next(err);
  }
};
