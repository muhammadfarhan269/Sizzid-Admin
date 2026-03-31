import api from "./axios";

export const registerApi = async (payload) => {
  const { data } = await api.post("/auth/register", payload);
  return data.data;
};

export const loginApi = async (payload) => {
  const { data } = await api.post("/auth/login", payload);
  return data.data;
};

export const logoutApi = async () => {
  const { data } = await api.post("/auth/logout");
  return data.data;
};

export const meApi = async () => {
  const { data } = await api.get("/auth/me");
  return data.data;
};
