import { Request, Response } from "express";
import { addTransaction, getTransctionHistory } from "./transaction.service";
import { updateBudgetFromDb } from "../budget/budget.service";
import { updateCardFromDB } from "../card/card.service";

export const addExpensee = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const transaction = await addTransaction(body);
    const budget = await updateBudgetFromDb(body);
    const card = await updateCardFromDB(body, "expense");
    return res.status(200).json({
      error: false,
      data: transaction,
      message: "Transction added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `add expensee failed: ${error.message}`,
    });
  }
};

export const transctionHistory = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    const history = await getTransctionHistory(id);
    return res.status(200).json({
      error: false,
      data: history,
      message: "Transction history fetch successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `transction history failed: ${error.message}`,
    });
  }
};
