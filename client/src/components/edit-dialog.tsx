import { update_a_blog } from "@/api/blog.api";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { updateBlog } from "@/features/blogSlice";
import { BlogType } from "@/types/types";
import axios from "axios";
import { Pen } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props {
    blog: BlogType;
}

export function EditDialougeButton({ blog }: Props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTitle(blog.title);
        setDescription(blog.description);
    }, [blog]);

    const [showDialouge, setShowDialouge] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const data = await update_a_blog(blog.id, title, description);
            if (data.success) {
                dispatch(updateBlog(data.blog));
                toast.success("Blog Updated successfully");
                setShowDialouge(false);
                navigate("/");
                setTitle("");
                setDescription("");
            }
        } catch (error) {
            console.log(error);
            if (axios.isAxiosError(error) && error.response)
                console.log(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={showDialouge}>
            <DialogTrigger asChild>
                <Button
                    variant="default"
                    className="flex items-center gap-2"
                    onClick={() => setShowDialouge(true)}
                >
                    <Pen />
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Edit Blog</DialogTitle>
                    <DialogDescription>
                        Make changes to your blog here. Click update when you're
                        done.
                    </DialogDescription>
                </DialogHeader>

                <div onSubmit={() => {}} className="w-full rounded-lg h-auto">
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block font-medium mb-1"
                        >
                            Title
                        </label>
                        <Input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title..."
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="description"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            Description
                        </label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter description..."
                            required
                            className="h-72"
                            disabled={isLoading}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button onClick={() => setShowDialouge(false)}>
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-green-500"
                    >
                        Update
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
