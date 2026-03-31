import api from "./axios";

export const getMyProfileApi = async () => {
  const { data } = await api.get("/users/profile");
  return data.data;
};

export const updateMyProfileApi = async (payload) => {
  const { data } = await api.put("/users/profile", payload);
  return data.data;
};

export const changePasswordApi = async (payload) => {
  const { data } = await api.put("/users/change-password", payload);
  return data.data;
};

export const getMyStatsApi = async () => {
  const { data } = await api.get("/users/stats");
  return data.data;
};

export const claimReferralApi = async (referralCode) => {
  const { data } = await api.post("/affiliates/claim", { referralCode });
  return data.data;
};
