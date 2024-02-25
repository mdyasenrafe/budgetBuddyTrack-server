import express from "express";
import {
  getUserInfoFromToken,
  registerUser,
  signInUser,
} from "./user.controller";
import { verifyAuthToken } from "../../config/verifyAuthToken";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/signin", signInUser);
userRouter.get("/user-info", verifyAuthToken, getUserInfoFromToken);

export default userRouter;
