import { paginated, success } from "../../utils/response.js";
import {
  createTicket,
  getAllTickets,
  getMyTickets,
  getTicket,
  sendMessage,
  updateTicketPriority,
  updateTicketStatus,
} from "./support.service.js";

const toNumber = (value, fallback) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

export const createTicketController = async (req, res, next) => {
  try {
    const data = await createTicket(req.user.id, req.body);
    return success(res, data, "Ticket created", 201);
  } catch (err) {
    return next(err);
  }
};

export const getMyTicketsController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await getMyTickets(req.user.id, { status: req.query.status, page, limit });
    return paginated(res, data.items, data.total, page, limit);
  } catch (err) {
    return next(err);
  }
};

export const getTicketController = async (req, res, next) => {
  try {
    const data = await getTicket(req.user, req.params.id);
    return success(res, data, "Ticket details");
  } catch (err) {
    return next(err);
  }
};

export const sendMessageController = async (req, res, next) => {
  try {
    const data = await sendMessage(req.user, req.params.id, req.body.message);
    return success(res, data, "Message sent");
  } catch (err) {
    return next(err);
  }
};

export const getAllTicketsController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await getAllTickets({
      status: req.query.status,
      priority: req.query.priority,
      page,
      limit,
    });
    return paginated(res, data.items, data.total, page, limit);
  } catch (err) {
    return next(err);
  }
};

export const updateTicketStatusController = async (req, res, next) => {
  try {
    const data = await updateTicketStatus(req.user.id, req.params.id, req.body.status);
    return success(res, data, "Ticket status updated");
  } catch (err) {
    return next(err);
  }
};

export const updateTicketPriorityController = async (req, res, next) => {
  try {
    const data = await updateTicketPriority(req.user.id, req.params.id, req.body.priority);
    return success(res, data, "Ticket priority updated");
  } catch (err) {
    return next(err);
  }
};
