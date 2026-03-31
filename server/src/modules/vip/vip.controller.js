import { success } from "../../utils/response.js";
import { getMyVipTier, getVipBenefits, getVipTiers } from "./vip.service.js";

export const getVipTiersController = async (req, res, next) => {
  try {
    const data = getVipTiers();
    return success(res, data, "VIP tiers");
  } catch (err) {
    return next(err);
  }
};

export const getMyVipTierController = async (req, res, next) => {
  try {
    const data = await getMyVipTier(req.user.id);
    return success(res, data, "My VIP tier");
  } catch (err) {
    return next(err);
  }
};

export const getVipBenefitsController = async (req, res, next) => {
  try {
    const data = getVipBenefits();
    return success(res, data, "VIP benefits");
  } catch (err) {
    return next(err);
  }
};
