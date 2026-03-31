import { paginated, success } from "../../utils/response.js";
import {
  createReward,
  deleteReward,
  getAllRedemptions,
  getMyRedemptions,
  getReward,
  listRewards,
  redeemReward,
  updateRedemptionStatus,
  updateReward,
} from "./rewards.service.js";

const toNumber = (value, fallback) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

export const listRewardsController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await listRewards({ page, limit });
    return paginated(res, data.items, data.total, page, limit);
  } catch (err) {
    return next(err);
  }
};

export const getRewardController = async (req, res, next) => {
  try {
    const data = await getReward(req.params.id);
    return success(res, data, "Reward details");
  } catch (err) {
    return next(err);
  }
};

export const createRewardController = async (req, res, next) => {
  try {
    const data = await createReward(req.body);
    return success(res, data, "Reward created", 201);
  } catch (err) {
    return next(err);
  }
};

export const updateRewardController = async (req, res, next) => {
  try {
    const data = await updateReward(req.params.id, req.body);
    return success(res, data, "Reward updated");
  } catch (err) {
    return next(err);
  }
};

export const deleteRewardController = async (req, res, next) => {
  try {
    const data = await deleteReward(req.params.id);
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};

export const redeemRewardController = async (req, res, next) => {
  try {
    const data = await redeemReward(req.user.id, req.params.id);
    return success(res, data, "Reward redemption requested");
  } catch (err) {
    return next(err);
  }
};

export const getMyRedemptionsController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await getMyRedemptions(req.user.id, { page, limit });
    return paginated(res, data.items, data.total, page, limit);
  } catch (err) {
    return next(err);
  }
};

export const getAllRedemptionsController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await getAllRedemptions({ status: req.query.status, page, limit });
    return paginated(res, data.items, data.total, page, limit);
  } catch (err) {
    return next(err);
  }
};

export const updateRedemptionStatusController = async (req, res, next) => {
  try {
    const data = await updateRedemptionStatus(
      req.user.id,
      req.params.id,
      req.body.status,
      req.body.notes
    );
    return success(res, data, "Redemption status updated");
  } catch (err) {
    return next(err);
  }
};
