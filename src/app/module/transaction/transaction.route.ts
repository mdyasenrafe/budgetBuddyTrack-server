import express from "express";
import { verifyAuthToken } from "../../config/verifyAuthToken";
import { addExpensee, transctionHistory } from "./transaction.controller";
const transactionRouter = express.Router();

transactionRouter.post("/add-expense", verifyAuthToken, addExpensee);
transactionRouter.get(
  "/transaction-history",
  verifyAuthToken,
  transctionHistory
);

export default transactionRouter;
