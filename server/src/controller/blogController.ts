import { NextFunction, Request, Response } from "express";
import { db } from "../config/prismaConfig";
import { TryCatch } from "../middleware/errorMiddleware";

export const createBlog = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const { title, description } = req.body;
        const userId = req.user?.id;

        const blog = await db.blog.create({
            data: {
                title,
                description,
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });

        return res.status(201).json({
            message: "Blog created successfully",
            blog,
        });
    }
);

export const updateBlog = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const { blogId } = req.params;
        const { title, description } = req.body;

        await db.blog.update({
            where: { id: blogId },
            data: {
                title,
                description,
            },
        });

        return res.status(200).json({
            message: "Blog updated successfully",
        });
    }
);

export const deleteBlog = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const { blogId } = req.params;

        await db.blog.delete({
            where: { id: blogId },
        });

        return res.status(200).json({
            message: "Blog deleted successfully",
        });
    }
);

export const getAllBlogs = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const blogs = await db.blog.findMany({
            include: {
                user: {
                    select: { name: true },
                },
            },
        });

        return res.status(200).json({
            blogs,
        });
    }
);

export const getAllBlogsOfCurrentUser = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const userId = req.user?.id;

        const blogs = await db.blog.findMany({
            where: { userId },
        });
        return res.status(200).json({ blogs });
    }
);

export const getABlog = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const { blogId } = req.params;

        const blog = await db.blog.findUnique({
            where: { id: blogId },
            include: {
                user: true,
            },
        });

        return res.status(200).json({
            blog,
        });
    }
);
