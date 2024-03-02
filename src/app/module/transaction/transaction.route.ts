import express from "express";
import { verifyAuthToken } from "../../config/verifyAuthToken";
import { addExpense, getTransactionHistory } from "./transaction.controller";
const router = express.Router();

router.post("/add-expense", verifyAuthToken, addExpense);
router.get("/transaction-history", verifyAuthToken, getTransactionHistory);

export default router;
