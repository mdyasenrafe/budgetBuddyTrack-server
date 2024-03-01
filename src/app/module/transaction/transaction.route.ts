import express from "express";
import { verifyAuthToken } from "../../config/verifyAuthToken";
import { addExpensee } from "./transaction.controller";
const transactionRouter = express.Router();

transactionRouter.post("/add-expense", verifyAuthToken, addExpensee);

export default transactionRouter;
