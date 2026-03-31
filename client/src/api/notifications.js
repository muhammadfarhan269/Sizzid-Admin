import api from "./axios";

export const getNotifications = (params) => api.get("/users/notifications", { params });
export const markRead = (id) => api.patch(`/users/notifications/${id}/read`);
export const markAllRead = () => api.patch("/users/notifications/read-all");
