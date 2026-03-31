import api from "./axios";

export const login = (email, password) => api.post("/auth/login", { email, password });
export const register = (email, username, password) => api.post("/auth/register", { email, username, password });
export const logout = () => api.post("/auth/logout");
export const getMe = () => api.get("/auth/me");
export const forgotPassword = (email) => api.post("/auth/forgot-password", { email });
export const verifyOtp = (email, otp) => api.post("/auth/verify-otp", { email, otp });
export const resetPassword = (email, otp, newPassword) => api.post("/auth/reset-password", { email, otp, newPassword });
