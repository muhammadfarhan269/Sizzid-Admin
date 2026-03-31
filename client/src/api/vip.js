import api from "./axios";

export const getVipTiersApi = async () => {
  const { data } = await api.get("/vip/tiers");
  return data.data || [];
};

export const getVipBenefitsApi = async () => {
  const { data } = await api.get("/vip/benefits");
  return data.data || {};
};

export const getMyVipTierApi = async () => {
  const { data } = await api.get("/vip/my-tier");
  return data.data;
};
