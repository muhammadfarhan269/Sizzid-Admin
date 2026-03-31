import api from "./axios";

export const getProfile = () => api.get("/users/profile");
export const updateProfile = (payload) => api.put("/users/profile", payload);
export const changePassword = (currentPassword, newPassword) => api.put("/users/change-password", { currentPassword, newPassword });
export const getStats = () => api.get("/users/stats");
