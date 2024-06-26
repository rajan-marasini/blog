import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { handleError } from "./middleware/errorMiddleware";
import { blogRoute } from "./routes/blogRoute";
import { userRoute } from "./routes/userRoute";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://blog-client-mocha.vercel.app",
            "https://blog-client-razan-marasinis-projects.vercel.app",
            "https://blog-client-git-main-razan-marasinis-projects.vercel.app",
        ],
        credentials: true,
    })
);

//routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/blog", blogRoute);
app.use(handleError);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
