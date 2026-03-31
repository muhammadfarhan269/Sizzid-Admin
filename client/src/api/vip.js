import api from "./axios";

export const getTiers = () => api.get("/vip/tiers");
export const getMyTier = () => api.get("/vip/my-tier");
export const getBenefits = () => api.get("/vip/benefits");
