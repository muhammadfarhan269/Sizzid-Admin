import api from "./axios";

export const getGlobal = (params) => api.get("/leaderboard/global", { params });
export const getByGame = (gameId) => api.get(`/leaderboard/game/${gameId}`);
export const getTournamentBoard = (id) => api.get(`/leaderboard/tournament/${id}`);
export const getMyRank = () => api.get("/leaderboard/me");
