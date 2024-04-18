import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { db } from "../config/prismaConfig";
import { ErrorHandler } from "../utils/utilityClasses";
import { TryCatch } from "./errorMiddleware";

declare global {
    namespace Express {
        interface Request {
            user: User | null;
        }
    }
}

export const isSignedIn = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const { token } = req.cookies;
        if (!token) {
            return next(new ErrorHandler("User is not signed in"));
        }
        const { id } = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        const user = await db.user.findUnique({
            where: { id },
        });
        if (!user) {
            return next(new ErrorHandler("User not found"));
        }
        req.user = user;
        next();
    }
);
