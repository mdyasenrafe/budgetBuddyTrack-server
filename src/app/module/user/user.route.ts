import express from "express";
import { registerUser, signInUser } from "./user.controller";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/signin", signInUser);

export default userRouter;
