// auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const verifyAuthToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(401)
      .json({ error: true, message: "Authorization header is missing." });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    req.user = {
      email: decoded.email,
      id: decoded.id,
      name: decoded.name,
    };
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ error: true, message: "Invalid or expired token." });
  }
};
