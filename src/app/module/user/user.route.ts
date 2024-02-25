import express from "express";
import { registerUser, signInUser, userInfoFromToken } from "./user.controller";
import checkLogin from "../../config/CheckLogin";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/signin", signInUser);
userRouter.get("/userInfoFromToken", checkLogin, userInfoFromToken);

export default userRouter;
