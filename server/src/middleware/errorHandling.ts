import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/utilityClasses";

export const handleError = (
    error: CustomError,
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
