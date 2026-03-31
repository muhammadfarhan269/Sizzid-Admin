import api from "./axios";

export const listRewardsApi = async (params) => {
  const { data } = await api.get("/rewards", { params });
  return data.data || [];
};

export const redeemRewardApi = async (id) => {
  const { data } = await api.post(`/rewards/${id}/redeem`);
  return data.data;
};

export const myRedemptionsApi = async (params) => {
  const { data } = await api.get("/rewards/redemptions/mine", { params });
  return data.data || [];
};
