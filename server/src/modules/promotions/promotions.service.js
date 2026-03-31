import prisma from "../../config/db.js";
import { AppError } from "../../utils/AppError.js";

export const listPromotions = async ({ page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    prisma.promotion.findMany({
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.promotion.count(),
  ]);
  return { items, total, page, limit };
};

export const listActivePromotions = async () => {
  const now = new Date();
  return prisma.promotion.findMany({
    where: {
      isActive: true,
      startsAt: { lte: now },
      endsAt: { gte: now },
    },
    orderBy: { endsAt: "asc" },
  });
};

export const getPromotion = async (id) => {
  const promotion = await prisma.promotion.findUnique({ where: { id } });
  if (!promotion) throw new AppError("Promotion not found", 404);
  return promotion;
};

export const createPromotion = async ({
  title,
  description,
  bannerImageUrl,
  type,
  pointsBonus,
  startsAt,
  endsAt,
}) => {
  const start = new Date(startsAt);
  const end = new Date(endsAt);
  if (end <= start) throw new AppError("endsAt must be after startsAt", 400);

  return prisma.promotion.create({
    data: {
      title,
      description,
      bannerImageUrl,
      type,
      pointsBonus: Number(pointsBonus || 0),
      startsAt: start,
      endsAt: end,
    },
  });
};

export const updatePromotion = async (id, data) => {
  await getPromotion(id);

  if (data.startsAt && data.endsAt) {
    const start = new Date(data.startsAt);
    const end = new Date(data.endsAt);
    if (end <= start) throw new AppError("endsAt must be after startsAt", 400);
  }

  return prisma.promotion.update({
    where: { id },
    data: {
      ...(data.title !== undefined ? { title: data.title } : {}),
      ...(data.description !== undefined ? { description: data.description } : {}),
      ...(data.bannerImageUrl !== undefined ? { bannerImageUrl: data.bannerImageUrl } : {}),
      ...(data.type !== undefined ? { type: data.type } : {}),
      ...(data.pointsBonus !== undefined ? { pointsBonus: Number(data.pointsBonus) } : {}),
      ...(data.startsAt !== undefined ? { startsAt: new Date(data.startsAt) } : {}),
      ...(data.endsAt !== undefined ? { endsAt: new Date(data.endsAt) } : {}),
      ...(data.isActive !== undefined ? { isActive: Boolean(data.isActive) } : {}),
    },
  });
};

export const deletePromotion = async (id) => {
  await getPromotion(id);
  await prisma.promotion.delete({ where: { id } });
  return { message: "Promotion deleted" };
};

export const togglePromotion = async (id) => {
  const promotion = await getPromotion(id);
  return prisma.promotion.update({
    where: { id },
    data: { isActive: !promotion.isActive },
  });
};
