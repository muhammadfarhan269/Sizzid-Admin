import { success, paginated } from "../../utils/response.js";
import { adminAdjustPoints, getMyPoints, getPointHistory } from "./points.service.js";

const toNumber = (value, fallback) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

export const getMyPointsController = async (req, res, next) => {
  try {
    const data = await getMyPoints(req.user.id);
    return success(res, data, "My points");
  } catch (err) {
    return next(err);
  }
};

export const getPointHistoryController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await getPointHistory(req.user.id, { page, limit });
    return paginated(res, data.items, data.total, page, limit);
  } catch (err) {
    return next(err);
  }
};

export const adminAdjustPointsController = async (req, res, next) => {
  try {
    const { userId, amount, reason } = req.body;
    const data = await adminAdjustPoints(req.user.id, userId, Number(amount), reason);
    return success(res, data, "Points adjusted");
  } catch (err) {
    return next(err);
  }
};
