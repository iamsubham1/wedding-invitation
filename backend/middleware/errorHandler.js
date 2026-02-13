/**
 * Global error handling middleware
 */
export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  const status = err.status || 500;
  const message = err.message || "Internal server error";

  res.status(status).json({
    success: false,
    message,
    error: process.env.NODE_ENV === "development" ? err : undefined,
  });
};

/**
 * 404 Not Found middleware
 */
export const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
    path: req.path,
  });
};
