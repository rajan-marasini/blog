import { get_a_blog } from "@/api/blog.api";
import Loader from "@/components/home/Loader";
import { formatDate } from "@/lib/formatDate";
import { BlogType } from "@/types/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<BlogType>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            setIsLoading(true);
            const data = await get_a_blog(id!);
            setBlog(data.blog);
            setIsLoading(false);
        };
        fetchBlog();
    }, [id]);

    return !isLoading ? (
        <div>
            <div className="container mx-auto mt-8">
                <div className="rounded-lg p-4">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-4">
                            {blog?.title}
                        </h1>
                        <p className="text-gray-600 mb-4">
                            Posted on{" "}
                            <span className="font-semibold">
                                {formatDate(blog?.createdAt)}
                            </span>{" "}
                            by{" "}
                            <span className="font-semibold">
                                {blog?.user?.name}
                            </span>
                        </p>

                        <p className="text-lg leading-relaxed">
                            {blog?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default BlogPage;
