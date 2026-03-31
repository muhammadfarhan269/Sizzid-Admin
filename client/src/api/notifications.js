import api from "./axios";

export const getNotificationsApi = async (params) => {
  const { data } = await api.get("/users/notifications", { params });
  return { items: data.data || [], unreadCount: data.unreadCount || 0 };
};

export const markNotificationReadApi = async (id) => {
  const { data } = await api.patch(`/users/notifications/${id}/read`);
  return data.data;
};

export const markAllNotificationsReadApi = async () => {
  const { data } = await api.patch("/users/notifications/read-all");
  return data.data;
};
