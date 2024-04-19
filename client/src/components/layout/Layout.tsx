import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="container py-4 flex flex-col">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
