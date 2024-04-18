import { createBlog } from "@/api/blog.api";
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
import { addBlog } from "@/features/blogSlice";
import axios from "axios";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const BlogAddDialog = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [showDialog, setShowDialog] = useState(false);

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            const data = await createBlog(title, description);
            if (data.success) {
                dispatch(addBlog(data.blog));
                setShowDialog(false);
                toast.success("Blog created successfully");
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
        <Dialog open={showDialog}>
            <DialogTrigger asChild>
                <Button
                    variant="default"
                    className="flex items-center gap-2"
                    onClick={() => setShowDialog(true)}
                >
                    <PlusIcon />
                    Add Blog
                </Button>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Add a new Blog</DialogTitle>
                    <DialogDescription>
                        Create a new blog here. Click add when you're done.
                    </DialogDescription>
                </DialogHeader>

                <div className="w-full rounded-lg h-auto">
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
                    <Button
                        onClick={() => setShowDialog(false)}
                        disabled={isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-green-500"
                    >
                        Add Blog
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BlogAddDialog;
