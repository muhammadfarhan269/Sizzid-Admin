import api from "./axios";

export const getMyTicketsApi = async () => {
  const { data } = await api.get("/support/mine");
  return data.data || [];
};

export const getTicketApi = async (id) => {
  const { data } = await api.get(`/support/${id}`);
  return data.data;
};

export const sendTicketMessageApi = async (id, payload) => {
  const { data } = await api.post(`/support/${id}/message`, payload);
  return data.data;
};

export const createTicketApi = async (payload) => {
  const { data } = await api.post("/support", payload);
  return data.data;
};
