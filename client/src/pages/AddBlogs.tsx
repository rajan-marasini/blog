import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserSelector } from "@/features/userSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AddBlogs = () => {
    const user = useSelector(UserSelector);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTitle("");
        setDescription("");
    };

    return user ? (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white shadow-md p-8 rounded-lg h-[80vh]"
        >
            <h2 className="text-2xl font-semibold mb-4 text-center">
                Add New Blog
            </h2>
            <div className="mb-4">
                <label
                    htmlFor="title"
                    className="block text-gray-700 font-medium mb-1"
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
                />
            </div>
            <Button type="submit" className="w-full">
                Submit
            </Button>
        </form>
    ) : (
        <Navigate to={"/login"} />
    );
};

export default AddBlogs;
