import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { db } from "../config/prismaConfig";
import { TryCatch } from "../middleware/errorMiddleware";
import { comparePassword, hashPassword } from "../utils/bcrypt";
import { ErrorHandler } from "../utils/utilityClasses";

export const userRegister = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const { name, email, password } = req.body;

        const isUserAlreadyExist = await db.user.findUnique({
            where: { email },
        });

        if (isUserAlreadyExist) {
            return next(new ErrorHandler("User already exist", 400));
        }

        const hashedPassword = hashPassword(password);

        const user = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    }
);

export const userLogin = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const { email, password } = req.body;

        const user = await db.user.findUnique({
            where: { email },
        });
        if (!user) {
            return next(new ErrorHandler("Invalid credentials", 400));
        }

        const isPasswordMatch = comparePassword(password, user.password);
        if (!isPasswordMatch) {
            return next(new ErrorHandler("Invalid credentials", 400));
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
            expiresIn: "7d",
        });
        return res
            .status(200)
            .cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
            })
            .json({
                success: true,
                message: "Successfully Logged in",
                user,
            });
    }
);

export const loggedInUser = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            user: req.user,
        });
    }
);

export const userLogout = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        req.user = null;
        res.status(200).clearCookie("token").json({
            success: true,
            message: "User logged out successfully",
            user: null,
        });
    }
);
