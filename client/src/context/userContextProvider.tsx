import { profile } from "@/api/user.api";
import { setUser } from "@/features/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {
    children: React.ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getProfile = async () => {
            const user = await profile();
            dispatch(setUser(user));
        };
        getProfile();
    }, [dispatch]);

    return <>{children}</>;
};

export default UserContextProvider;
