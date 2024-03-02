import mongoose from "mongoose";
import BudgetModel from "./budget.model";
import { BudgetDataType } from "./budget.interface";
import { ITransaction } from "../transaction/transaction.interface";

export const updateBudget = async (body: ITransaction) => {
  const { userId, category, amount } = body;

  // Perform the query using ObjectId
  const budget = await BudgetModel.findOneAndUpdate(
    {
      userId: userId,
      category: category,
    },
    {
      $inc: {
        spent: amount,
      },
    }
  );
  console.log("budget => ", budget);
  return budget;
};

export const createBudget = async (budgetData: BudgetDataType) => {
  const budget = await BudgetModel.create(budgetData);
  return budget;
};

// Service for getting a budget by userId
export const getBudgetByUserId = async (userId) => {
  const budgets = await BudgetModel.find({ userId });

  return budgets;
};
