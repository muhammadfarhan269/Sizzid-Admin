import { paginated, success } from "../../utils/response.js";
import {
  createPromotion,
  deletePromotion,
  getPromotion,
  listActivePromotions,
  listPromotions,
  togglePromotion,
  updatePromotion,
} from "./promotions.service.js";

const toNumber = (value, fallback) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

export const listPromotionsController = async (req, res, next) => {
  try {
    const page = toNumber(req.query.page, 1);
    const limit = toNumber(req.query.limit, 20);
    const data = await listPromotions({ page, limit });
    return paginated(res, data.items, data.total, page, limit);
  } catch (err) {
    return next(err);
  }
};

export const listActivePromotionsController = async (req, res, next) => {
  try {
    const data = await listActivePromotions();
    return success(res, data, "Active promotions");
  } catch (err) {
    return next(err);
  }
};

export const getPromotionController = async (req, res, next) => {
  try {
    const data = await getPromotion(req.params.id);
    return success(res, data, "Promotion details");
  } catch (err) {
    return next(err);
  }
};

export const createPromotionController = async (req, res, next) => {
  try {
    const data = await createPromotion(req.body);
    return success(res, data, "Promotion created", 201);
  } catch (err) {
    return next(err);
  }
};

export const updatePromotionController = async (req, res, next) => {
  try {
    const data = await updatePromotion(req.params.id, req.body);
    return success(res, data, "Promotion updated");
  } catch (err) {
    return next(err);
  }
};

export const deletePromotionController = async (req, res, next) => {
  try {
    const data = await deletePromotion(req.params.id);
    return success(res, data, data.message);
  } catch (err) {
    return next(err);
  }
};

export const togglePromotionController = async (req, res, next) => {
  try {
    const data = await togglePromotion(req.params.id);
    return success(res, data, "Promotion toggled");
  } catch (err) {
    return next(err);
  }
};
