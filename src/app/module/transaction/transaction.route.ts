import express from "express";
import { verifyAuthToken } from "../../config/verifyAuthToken";
import { addExpensee } from "./transaction.controller";
import { model } from "mongoose";
const transactionRouter = express.Router();

transactionRouter.post("/add-expense", verifyAuthToken, addExpensee);

export default transactionRouter;
