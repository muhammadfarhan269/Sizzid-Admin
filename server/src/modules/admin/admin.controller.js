import { paginated, success } from "../../utils/response.js";
import {
  banUser,
  changeUserRole,
  createApproval,
  getApproval,
  getDashboardStats,
  getUserDetail,
  listApprovals,
  listUsers,
  reviewApproval,
  unbanUser,
} from "./admin.service.js";

const toNumber = (value, fallback) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

const toOptionalBoolean = (value) => {
  if (value === undefined) return undefined;
  if (value === "true" || value === true) return true;
  if (value === "false" || value === false) return false;
  return undefined;
};

export const getDashboardStatsController = async (req, res, next) => {
  try {
    const data = await getDashboardStats();
    return success(res, data, "Dashboard stats");
  } catch (err) {
    return next(err);
  }
};

export const listUsersController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await listUsers({
      search: req.query.search,
      role: req.query.role,
      vipTier: req.query.vipTier,
      isBanned: toOptionalBoolean(req.query.isBanned),
      page,
      limit,
    });
    return paginated(res, data.items, data.total, page, limit);
  } catch (err) {
    return next(err);
  }
};

export const getUserDetailController = async (req, res, next) => {
  try {
    const data = await getUserDetail(req.params.id);
    return success(res, data, "User detail");
  } catch (err) {
    return next(err);
  }
};

export const banUserController = async (req, res, next) => {
  try {
    const data = await banUser(req.user.id, req.params.id, req.body.reason);
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};

export const unbanUserController = async (req, res, next) => {
  try {
    const data = await unbanUser(req.user.id, req.params.id);
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};

export const changeUserRoleController = async (req, res, next) => {
  try {
    const data = await changeUserRole(req.user.id, req.params.id, req.body.newRole);
    return success(res, data, "User role updated");
  } catch (err) {
    return next(err);
  }
};

export const listApprovalsController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await listApprovals({
      status: req.query.status,
      type: req.query.type,
      page,
      limit,
    });
    return paginated(res, data.items, data.total, page, limit);
  } catch (err) {
    return next(err);
  }
};

export const getApprovalController = async (req, res, next) => {
  try {
    const data = await getApproval(req.params.id);
    return success(res, data, "Approval detail");
  } catch (err) {
    return next(err);
  }
};

export const createApprovalController = async (req, res, next) => {
  try {
    const data = await createApproval(req.user.id, req.body);
    return success(res, data, "Approval created", 201);
  } catch (err) {
    return next(err);
  }
};

export const reviewApprovalController = async (req, res, next) => {
  try {
    const data = await reviewApproval(req.user.id, req.params.id, req.body.status, req.body.notes);
    return success(res, data, "Approval reviewed");
  } catch (err) {
    return next(err);
  }
};
