import api from "./axios";

export const getRewards = () => api.get("/rewards");
export const redeemReward = (id) => api.post(`/rewards/${id}/redeem`);
export const getMyRedemptions = (params) => api.get("/rewards/redemptions/mine", { params });
