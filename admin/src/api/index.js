import api from "./axios";

export const adminLogin = (email, password) => api.post("/auth/admin/login", { email, password });
export const getMe = () => api.get("/auth/me");

export const getDashboardStats = () => api.get("/admin/dashboard/stats");

export const getUsers = (params) => api.get("/admin/users", { params });
export const getUserDetail = (id) => api.get(`/admin/users/${id}`);
export const banUser = (id, reason) => api.patch(`/admin/users/${id}/ban`, { reason });
export const unbanUser = (id) => api.patch(`/admin/users/${id}/unban`);

export const getGames = (params) => api.get("/games", { params });
export const createGame = (data) => api.post("/games", data);
export const updateGame = (id, data) => api.put(`/games/${id}`, data);
export const deleteGame = (id) => api.delete(`/games/${id}`);
export const toggleHotGame = (id) => api.patch(`/games/${id}/hot`);
export const toggleActiveGame = (id) => api.patch(`/games/${id}/active`);

export const getGlobalLeaderboard = (params) => api.get("/leaderboard/global", { params });
export const getGameLeaderboard = (gameId) => api.get(`/leaderboard/game/${gameId}`);

export const getReports = () => api.get("/admin/dashboard/stats");

export const getPromotions = () => api.get("/promotions");
export const createPromotion = (data) => api.post("/promotions", data);
export const updatePromotion = (id, data) => api.put(`/promotions/${id}`, data);
export const deletePromotion = (id) => api.delete(`/promotions/${id}`);
export const togglePromotion = (id) => api.patch(`/promotions/${id}/toggle`);

export const getApprovals = (params) => api.get("/admin/approvals", { params });
export const reviewApproval = (id, status, notes) => api.patch(`/admin/approvals/${id}`, { status, notes });

export const getAllTickets = (params) => api.get("/support/admin/all", { params });
export const getTicket = (id) => api.get(`/support/${id}`);
export const updateTicketStatus = (id, status) => api.patch(`/support/admin/${id}/status`, { status });
export const updateTicketPriority = (id, priority) => api.patch(`/support/admin/${id}/priority`, { priority });
export const sendAdminMessage = (id, message) => api.post(`/support/${id}/message`, { message });

export const getRewards = () => api.get("/rewards");
export const getAllRedemptions = (params) => api.get("/rewards/redemptions/all", { params });
export const updateRedemptionStatus = (id, status) => api.patch(`/rewards/redemptions/${id}`, { status });

export const getVipTiers = () => api.get("/vip/tiers");

export const adminAdjustPoints = (userId, amount, reason) => api.post("/points/admin/adjust", { userId, amount, reason });
