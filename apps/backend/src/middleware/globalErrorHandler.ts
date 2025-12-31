import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export function globalErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Default values
  let statusCode = 500;
  let message = "Internal server error";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  // Log only in non-test env
  if (process.env.NODE_ENV !== "test") {
    console.error("🔥 Error:", {
      method: req.method,
      path: req.originalUrl,
      message: err.message,
      stack: err.stack,
    });
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
}
