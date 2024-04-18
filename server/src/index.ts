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
app.use(cors());

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
