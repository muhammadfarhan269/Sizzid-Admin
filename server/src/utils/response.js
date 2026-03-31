export const success = (res, data = null, message = "success", statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const error = (res, message = "error", statusCode = 400) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export const paginated = (res, data, total, page, limit) => {
  return res.status(200).json({
    success: true,
    data,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  });
};
