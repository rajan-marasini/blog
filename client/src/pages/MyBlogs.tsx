import { get_my_blogs } from "@/api/blog.api";
import BlogCard from "@/components/home/BlogCard";
import Loader from "@/components/home/Loader";
import { BlogSelector, setBlogs } from "@/features/blogSlice";
import { SearchSelector } from "@/features/searchSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyBlogs = () => {
    const dispatch = useDispatch();
    const Blogs = useSelector(BlogSelector);
    const search = useSelector(SearchSelector);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Fetch all blogs written by the user
        const getMyBlogs = async () => {
            setIsLoading(true);
            const data = await get_my_blogs();
            dispatch(setBlogs(data.blogs));
            setIsLoading(false);
        };
        getMyBlogs();
    }, [dispatch]);

    const filteredBlogs = Blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    return !isLoading ? (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-center">My Blogs</h1>
            <div className="space-y-4">
                {filteredBlogs.map((blog, i) => (
                    <BlogCard blog={blog} key={i} />
                ))}
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default MyBlogs;
