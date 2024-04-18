import express from "express";
import {
    loggedInUser,
    userLogin,
    userLogout,
    userRegister,
} from "../controller/userController";
import { isSignedIn } from "../middleware/userMiddleware";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/me", isSignedIn, loggedInUser);
router.post("/logout", isSignedIn, userLogout);

export { router as userRoute };
