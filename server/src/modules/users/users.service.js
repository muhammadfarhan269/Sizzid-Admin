import prisma from "../../config/db.js";
import { AppError } from "../../utils/AppError.js";

export const getMyNotifications = async (userId, { page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit;
  const [items, total, unreadCount] = await Promise.all([
    prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.notification.count({ where: { userId } }),
    prisma.notification.count({ where: { userId, isRead: false } }),
  ]);

  return { items, total, unreadCount, page, limit };
};

export const markAsRead = async (userId, notificationId) => {
  const notification = await prisma.notification.findUnique({
    where: { id: notificationId },
  });
  if (!notification) throw new AppError("Notification not found", 404);
  if (notification.userId !== userId) throw new AppError("Forbidden", 403);

  return prisma.notification.update({
    where: { id: notificationId },
    data: { isRead: true },
  });
};

export const markAllAsRead = async (userId) => {
  await prisma.notification.updateMany({
    where: { userId, isRead: false },
    data: { isRead: true },
  });
  return { message: "All notifications marked as read" };
};
