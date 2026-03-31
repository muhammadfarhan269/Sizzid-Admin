import { paginated, success } from "../../utils/response.js";
import {
  claimReferralBonus,
  getAllAffiliates,
  getMyAffiliateStats,
  getMyReferrals,
} from "./affiliates.service.js";

const toNumber = (value, fallback) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

export const getMyReferralsController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await getMyReferrals(req.user.id, { page, limit });
    return paginated(res, data.items, data.total, page, limit);
  } catch (err) {
    return next(err);
  }
};

export const getMyAffiliateStatsController = async (req, res, next) => {
  try {
    const data = await getMyAffiliateStats(req.user.id);
    return success(res, data, "Affiliate stats");
  } catch (err) {
    return next(err);
  }
};

export const getAllAffiliatesController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await getAllAffiliates({ page, limit });
    return paginated(res, data.items, data.total, page, limit);
  } catch (err) {
    return next(err);
  }
};

export const claimReferralBonusController = async (req, res, next) => {
  try {
    const data = await claimReferralBonus(req.user.id, req.body.referralCode);
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};
