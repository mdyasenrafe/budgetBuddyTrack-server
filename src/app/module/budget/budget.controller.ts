import { Request, Response } from "express";
import * as BudgetService from "./budget.service";

// Controller for creating a budget
export const createBudget = async (req: Request, res: Response) => {
  try {
    const budget = await BudgetService.createBudget(req.body);
    res.status(200).json(budget);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
