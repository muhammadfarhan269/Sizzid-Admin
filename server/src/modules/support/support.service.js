import prisma from "../../config/db.js";
import { AppError } from "../../utils/AppError.js";

export const createTicket = async (userId, { subject, message, priority = "MEDIUM" }) => {
  const ticket = await prisma.supportTicket.create({
    data: {
      userId,
      subject,
      status: "OPEN",
      priority,
      messages: {
        create: {
          senderId: userId,
          message,
          isAdminReply: false,
          sentAt: new Date(),
        },
      },
    },
    include: {
      messages: {
        orderBy: { sentAt: "asc" },
      },
    },
  });

  await prisma.notification.create({
    data: {
      userId,
      type: "SUPPORT",
      title: "Ticket created",
      body: "Your support ticket has been received.",
    },
  });

  return ticket;
};

export const getMyTickets = async (userId, { status, page = 1, limit = 20 }) => {
  const where = {
    userId,
    ...(status ? { status } : {}),
  };
  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    prisma.supportTicket.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
      include: {
        _count: { select: { messages: true } },
      },
    }),
    prisma.supportTicket.count({ where }),
  ]);

  return { items, total, page, limit };
};

export const getTicket = async (requester, ticketId) => {
  const ticket = await prisma.supportTicket.findUnique({
    where: { id: ticketId },
    include: {
      messages: {
        orderBy: { sentAt: "asc" },
        include: {
          sender: { select: { username: true } },
        },
      },
      user: { select: { id: true, username: true, email: true } },
    },
  });
  if (!ticket) throw new AppError("Ticket not found", 404);

  if (requester.role === "PLAYER" && ticket.userId !== requester.id) {
    throw new AppError("Forbidden", 403);
  }

  return ticket;
};

export const sendMessage = async (requester, ticketId, message) => {
  const ticket = await prisma.supportTicket.findUnique({ where: { id: ticketId } });
  if (!ticket) throw new AppError("Ticket not found", 404);

  if (requester.role === "PLAYER" && ticket.userId !== requester.id) {
    throw new AppError("Forbidden", 403);
  }
  if (ticket.status === "CLOSED") throw new AppError("Ticket is closed", 400);

  const isAdminReply = requester.role === "ADMIN" || requester.role === "SUPER_ADMIN";

  const ticketMessage = await prisma.ticketMessage.create({
    data: {
      ticketId,
      senderId: requester.id,
      message,
      isAdminReply,
      sentAt: new Date(),
    },
    include: {
      sender: { select: { username: true } },
    },
  });

  if (isAdminReply) {
    await prisma.supportTicket.update({
      where: { id: ticketId },
      data: { status: "IN_PROGRESS" },
    });
  }

  return ticketMessage;
};

export const getAllTickets = async ({ status, priority, page = 1, limit = 20 }) => {
  const where = {
    ...(status ? { status } : {}),
    ...(priority ? { priority } : {}),
  };
  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    prisma.supportTicket.findMany({
      where,
      orderBy: [{ priority: "desc" }, { createdAt: "asc" }],
      skip,
      take: limit,
      include: {
        user: { select: { username: true, email: true } },
      },
    }),
    prisma.supportTicket.count({ where }),
  ]);

  return { items, total, page, limit };
};

export const updateTicketStatus = async (adminId, ticketId, status) => {
  const ticket = await prisma.supportTicket.findUnique({ where: { id: ticketId } });
  if (!ticket) throw new AppError("Ticket not found", 404);

  const updated = await prisma.supportTicket.update({
    where: { id: ticketId },
    data: { status },
  });

  if (["RESOLVED", "CLOSED"].includes(status)) {
    await prisma.notification.create({
      data: {
        userId: ticket.userId,
        type: "SUPPORT",
        title: `Ticket ${status}`,
        body: `Your support ticket has been marked as ${status}.`,
      },
    });
  }

  return updated;
};

export const updateTicketPriority = async (adminId, ticketId, priority) => {
  const ticket = await prisma.supportTicket.findUnique({ where: { id: ticketId } });
  if (!ticket) throw new AppError("Ticket not found", 404);

  return prisma.supportTicket.update({
    where: { id: ticketId },
    data: { priority },
  });
};
