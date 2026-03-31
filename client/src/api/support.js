import api from "./axios";

export const createTicket = (subject, message, priority = "MEDIUM") => api.post("/support", { subject, message, priority });
export const getMyTickets = () => api.get("/support/mine");
export const getTicket = (id) => api.get(`/support/${id}`);
export const sendMessage = (id, message) => api.post(`/support/${id}/message`, { message });
