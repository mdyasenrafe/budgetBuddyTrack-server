import express from "express";
import { registerUser, testingUser } from "./user.controller";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.get("/signin", testingUser);

export default userRouter;
