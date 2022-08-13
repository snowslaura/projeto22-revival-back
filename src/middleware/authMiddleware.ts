import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import userService from "../services/userService.js";
import { unauthorizedError } from "../utils/errorUtils.js";


export async function AuthenticatedMiddleware(req: Request, res: Response, next: NextFunction) {

  const authorization = req.headers["authorization"];
  if (!authorization) throw unauthorizedError("Missing authorization header");

  const token = authorization.replace("Bearer ", "");
  if (!token) throw unauthorizedError("Missing token");

  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    const { userId } = jwt.verify(token,JWT_SECRET) as { userId: number };
    const user = await userService.findUserById(userId);
    res.locals.user = user;
    next();
  } catch {
    throw unauthorizedError("Invalid token");
  }
}
