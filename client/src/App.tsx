import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddBlogs from "./pages/AddBlogs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

export default function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/add-blog" element={<AddBlogs />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
