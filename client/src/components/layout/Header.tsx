import { logout } from "@/api/user.api";
import { Button } from "@/components/ui/button";
import { UserSelector, setUser } from "@/features/userSlice";
import axios from "axios";
import { LogIn, LogOut, Search } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { Input } from "../ui/input";

const Header = () => {
    const user = useSelector(UserSelector);
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            const data = await logout();
            if (data.success) {
                dispatch(setUser(null));
                toast.success("Logged out successfully");
            }
        } catch (error) {
            console.log(error);
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message);
            }
        }
    };

    return (
        <div className=" p-4 flex justify-between items-center gap-2">
            {/* Logo */}
            <div className="flex items-center">
                <Link to={"/"} className=" font-semibold text-lg">
                    MyBlogs
                </Link>
            </div>

            {/* Search Bar */}
            <div className="flex items-center rounded-md px-2 py-1 w-full max-w-lg border-2">
                <Input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent border-none focus:border-none focus:outline-none"
                />
                <Button variant={"ghost"} className="ml-2">
                    <Search />
                </Button>
            </div>

            {/* Sign In Button */}
            <div className="flex items-center gap-4">
                {!user ? (
                    <Button className="px-4 py-2 rounded-md" asChild>
                        <Link to={"/login"} className="flex items-center gap-2">
                            <LogIn />
                            <span>Sign In</span>
                        </Link>
                    </Button>
                ) : (
                    <Button
                        onClick={handleLogout}
                        className="flex items-center gap-2"
                    >
                        <LogOut />
                        Logout
                    </Button>
                )}

                <ModeToggle />
            </div>
        </div>
    );
};

export default Header;
