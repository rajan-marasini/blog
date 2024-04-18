import express from "express";
import {
    createBlog,
    deleteBlog,
    getABlog,
    getAllBlogs,
    getAllBlogsOfCurrentUser,
    updateBlog,
} from "../controller/blogController";
import { isSignedIn } from "../middleware/userMiddleware";

const router = express.Router();

router.post("/create", isSignedIn, createBlog);
router.get("/all-blogs", getAllBlogs);
router.get("/all-my-blogs", isSignedIn, getAllBlogsOfCurrentUser);
router
    .route("/:blogId")
    .get(isSignedIn, getABlog)
    .put(isSignedIn, updateBlog)
    .delete(isSignedIn, deleteBlog);

export { router as blogRoute };
