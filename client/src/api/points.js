import api from "./axios";

export const getMyPointsApi = async () => {
  const { data } = await api.get("/points");
  return data.data;
};
