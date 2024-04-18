import { RootState } from "@/store";
import { BlogType } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface BlogState {
    blogs: BlogType[];
}

const initialState: BlogState = {
    blogs: [],
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        addBlog: (state, action) => {
            state.blogs.push(action.payload);
        },
        updateBlog: (state, action) => {
            const blog = state.blogs.find(
                (blog) => blog.id === action.payload.id
            );
            if (blog) {
                blog.title = action.payload.title;
                blog.description = action.payload.description;
            }
        },
        deleteBlog: (state, action) => {
            state.blogs = state.blogs.filter(
                (blog) => blog.id !== action.payload.id
            );
        },
    },
});

export default blogSlice.reducer;
export const { setBlogs, addBlog, updateBlog, deleteBlog } = blogSlice.actions;
export const BlogSelector = (state: RootState) => state.blog.blogs;
