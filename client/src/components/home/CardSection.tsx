import { get_all_blogs } from "@/api/blog.api";
import { BlogSelector, setBlogs } from "@/features/blogSlice";
import { SearchSelector } from "@/features/searchSlice";
import { UserSelector } from "@/features/userSlice";
import { EyeIcon } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BlogAddDialog from "../blog-add-dialog";
import { Button } from "../ui/button";
import Blog from "./Blog";

const CardSection = () => {
    const dispatch = useDispatch();
    const user = useSelector(UserSelector);
    const Blogs = useSelector(BlogSelector);
    const search = useSelector(SearchSelector);

    useEffect(() => {
        const getAllBlogs = async () => {
            const data = await get_all_blogs();
            dispatch(setBlogs(data.blogs));
        };
        getAllBlogs();
    }, [dispatch]);

    const filteredBlogs = Blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
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
                    <Blog blog={blog} key={i} />
                ))}
            </div>
        </div>
    );
};

export default CardSection;
