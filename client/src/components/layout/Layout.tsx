import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="container">
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
