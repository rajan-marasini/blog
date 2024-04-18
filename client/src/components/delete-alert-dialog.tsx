import { delete_a_blog } from "@/api/blog.api";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteBlog } from "@/features/blogSlice";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface Props {
    id: string;
}

export function DeleteConfirmation({ id }: Props) {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        try {
            const data = await delete_a_blog(id);
            if (data.success) {
                toast.success("Blog deleted successfully");
                dispatch(deleteBlog(id));
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="destructive"
                    className="flex items-center gap-2"
                >
                    <Trash />
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the blog from out database.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
