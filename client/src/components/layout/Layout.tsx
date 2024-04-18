import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="container py-4">
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
