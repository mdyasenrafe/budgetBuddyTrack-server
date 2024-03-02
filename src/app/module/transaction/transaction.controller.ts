import { Request, Response } from "express";
import {
  createExpenseTransaction,
  fetchTransactionHistory,
} from "./transaction.service";
import { updateBudget } from "../budget/budget.service";
import { updateCard } from "../card/card.service";

export const addExpense = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const transaction = await createExpenseTransaction(body);
    await updateBudget(body);
    await updateCard(body, "expense");
    return res.status(201).json({
      error: false,
      data: transaction,
      message: "Expense added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Adding expense failed: ${error.message}`,
    });
  }
};

export const getTransactionHistory = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    const history = await fetchTransactionHistory(id);
    return res.status(200).json({
      error: false,
      data: history,
      message: "Transaction history fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Fetching transaction history failed: ${error.message}`,
    });
  }
};
