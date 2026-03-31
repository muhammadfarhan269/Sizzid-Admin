import api from "./axios";

export const listGamesApi = async (params) => {
  const { data } = await api.get("/games", { params });
  return data.data || [];
};

export const listHotGamesApi = async () => {
  const { data } = await api.get("/games/hot");
  return data.data || [];
};

export const getGameApi = async (id) => {
  const { data } = await api.get(`/games/${id}`);
  return data.data;
};

export const submitGameSessionApi = async (id, payload) => {
  const { data } = await api.post(`/games/${id}/session`, payload);
  return data.data;
};
