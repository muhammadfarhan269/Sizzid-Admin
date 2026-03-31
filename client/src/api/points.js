import api from "./axios";

export const getMyPoints = () => api.get("/points");
export const getHistory = (params) => api.get("/points/history", { params });
