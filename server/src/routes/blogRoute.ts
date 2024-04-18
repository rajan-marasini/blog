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
router
    .route("/:blogId")
    .get(isSignedIn, getABlog)
    .put(isSignedIn, updateBlog)
    .delete(isSignedIn, deleteBlog);
router.get("/all-my-blogs", isSignedIn, getAllBlogsOfCurrentUser);
router.get("/all-blogs", getAllBlogs);

export { router as blogRoute };
