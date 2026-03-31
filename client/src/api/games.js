import api from "./axios";

export const getGames = (params) => api.get("/games", { params });
export const getHotGames = () => api.get("/games/hot");
export const getGame = (id) => api.get(`/games/${id}`);
export const submitSession = (id, score, duration) => api.post(`/games/${id}/session`, { score, duration });
export const getTournaments = (params) => api.get("/games/tournaments", { params });
export const getTournament = (id) => api.get(`/games/tournaments/${id}`);
export const joinTournament = (id) => api.post(`/games/tournaments/${id}/join`);
export const submitTournamentScore = (id, score) => api.post(`/games/tournaments/${id}/submit`, { score });
