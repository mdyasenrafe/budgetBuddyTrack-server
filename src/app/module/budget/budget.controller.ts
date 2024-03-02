import { Request, Response } from "express";
import * as BudgetService from "./budget.service";

export const createBudget = async (req: Request, res: Response) => {
  try {
    const result = await BudgetService.createBudget(req.body);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    if (error.code == 11000) {
      {
        return res.status(409).json({
          error: true,
          message: "Budget already exists",
        });
      }
    }
    // Handle other errors
    return res.status(400).json({ error: true, message: error.message });
  }
};

// Controller for getting a budget by userId
export const getBudgetByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const budget = await BudgetService.getBudgetByUserId(userId);
    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }
    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
