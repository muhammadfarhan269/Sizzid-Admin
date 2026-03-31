import api from "./axios";

export const getGlobalLeaderboardApi = async (params) => {
  const { data } = await api.get("/leaderboard/global", { params });
  return data.data || [];
};

export const getGameLeaderboardApi = async (gameId, params) => {
  const { data } = await api.get(`/leaderboard/game/${gameId}`, { params });
  return data.data || [];
};

export const getMyRankApi = async () => {
  const { data } = await api.get("/leaderboard/me");
  return data.data;
};
