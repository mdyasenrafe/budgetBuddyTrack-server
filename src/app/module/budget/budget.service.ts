import mongoose from "mongoose";
import BudgetModel from "./budget.model";
import { TransactionDataType } from "../transaction/transaction.interface";
import { BudgetDataType } from "./budget.interface";

export const updateBudgetFromDb = async (body: TransactionDataType) => {
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
        remaining: -amount,
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
  const budget = await BudgetModel.findOne({ userId });
  return budget;
};
