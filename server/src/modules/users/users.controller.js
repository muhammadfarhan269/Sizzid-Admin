import { success } from "../../utils/response.js";
import { getMyNotifications, markAllAsRead, markAsRead } from "./users.service.js";

const toNumber = (value, fallback) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

export const getMyNotificationsController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await getMyNotifications(req.user.id, { page, limit });
    return res.status(200).json({
      success: true,
      data: data.items,
      unreadCount: data.unreadCount,
      pagination: {
        total: data.total,
        page,
        limit,
        totalPages: Math.ceil(data.total / limit),
      },
    });
  } catch (err) {
    return next(err);
  }
};

export const markAsReadController = async (req, res, next) => {
  try {
    const data = await markAsRead(req.user.id, req.params.id);
    return success(res, data, "Notification marked as read");
  } catch (err) {
    return next(err);
  }
};

export const markAllAsReadController = async (req, res, next) => {
  try {
    const data = await markAllAsRead(req.user.id);
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};
