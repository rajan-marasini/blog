import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { UserSelector } from "@/features/userSlice";
import { BlogType } from "@/types/types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteConfirmation } from "../delete-alert-dialog";
import { EditDialougeButton } from "../edit-dialog";

interface Props {
    blog: BlogType;
}

export default function BlogCard({ blog }: Props) {
    const user = useSelector(UserSelector);

    return (
        <Card className="w-full hover:scale-105 transition-all duration-300 border-2 border-gray-300 hover:shadow-lg">
            <Link to={`/blog/${blog.id}`}>
                <CardHeader>
                    <CardTitle>{blog.title}</CardTitle>
                    <span className="text-gray-500">
                        Written By: {blog.user?.name}
                    </span>
                </CardHeader>
                <CardContent>
                    <p>
                        {blog.description.length > 300
                            ? blog.description.slice(0, 300) + "..."
                            : blog.description}
                    </p>
                </CardContent>
            </Link>
            {blog.userId === user?.id && (
                <CardFooter className="flex items-center justify-end gap-3">
                    <EditDialougeButton blog={blog} />
                    <DeleteConfirmation id={blog.id} />
                </CardFooter>
            )}
        </Card>
    );
}
