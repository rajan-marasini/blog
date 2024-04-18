import { BlogSelector } from "@/features/blogSlice";
import { UserSelector } from "@/features/userSlice";
import { PlusIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const CardSection = () => {
    const user = useSelector(UserSelector);
    const Blogs = useSelector(BlogSelector);
    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Check out our new Blogs</h2>
                {user && (
                    <Button className="mr-8 flex items-center gap-2">
                        <PlusIcon />
                        <Link to={"/add-blog"}> Add Blog</Link>
                    </Button>
                )}
            </div>
            {Blogs.map((blog) => (
                <div key={blog.id} className="card">
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CardSection;
