import Layout from "@/components/layout/Layout";
import BlogPage from "@/pages/BlogPage";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MyBlogs from "@/pages/MyBlogs";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/my-blogs" element={<MyBlogs />} />
                <Route path="/blog/:id" element={<BlogPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
