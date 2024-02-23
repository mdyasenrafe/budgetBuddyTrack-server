import express from "express";
import { registerUser, testingRoute } from "./user.controller";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.get("/testing-route", testingRoute);

export default userRouter;
