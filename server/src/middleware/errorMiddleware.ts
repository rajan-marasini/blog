import { NextFunction, Request, Response } from "express";
import { ControllerType } from "../types/types";
import { ErrorHandler } from "../utils/utilityClasses";

export const handleError = (
    error: ErrorHandler,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    error.message ||= "Something went wrong";
    error.statusCode ||= 500;

    console.log(error.message);

    res.status(error.statusCode).json({
        success: false,
        message: error.message,
    });
};

export const TryCatch =
    (func: ControllerType) =>
    (req: Request, res: Response, next: NextFunction) =>
        Promise.resolve(func(req, res, next)).catch(next);
