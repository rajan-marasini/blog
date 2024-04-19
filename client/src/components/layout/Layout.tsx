import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

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
