import { get_all_blogs } from "@/api/blog.api";
import BlogAddDialog from "@/components/blog-add-dialog";
import BlogCard from "@/components/home/BlogCard";
import Loader from "@/components/home/Loader";
import { Button } from "@/components/ui/button";
import { BlogSelector, setBlogs } from "@/features/blogSlice";
import { SearchSelector } from "@/features/searchSlice";
import { UserSelector } from "@/features/userSlice";
import { EyeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardSection = () => {
    const dispatch = useDispatch();
    const user = useSelector(UserSelector);
    const Blogs = useSelector(BlogSelector);
    const search = useSelector(SearchSelector);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getAllBlogs = async () => {
            setIsLoading(true);
            const data = await get_all_blogs();
            dispatch(setBlogs(data.blogs));
            setIsLoading(false);
        };
        getAllBlogs();
    }, [dispatch]);

    const filteredBlogs = Blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    return !isLoading ? (
        <div>
            <div className="flex justify-between items-center my-8 flex-col md:flex-row">
                <h2 className="text-2xl font-bold">Check out our new Blogs</h2>
                {user && (
                    <div className="flex items-center gap-2">
                        <Link to={"/my-blogs"}>
                            <Button className="flex items-center gap-2">
                                <EyeIcon />
                                <span>View My Blogs</span>
                            </Button>
                        </Link>
                        <BlogAddDialog />
                    </div>
                )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {filteredBlogs.map((blog, i) => (
                    <BlogCard blog={blog} key={i} />
                ))}
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default CardSection;
