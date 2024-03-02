import mongoose from "mongoose";
import BudgetModel from "./budget.model";
import { TransactionDataType } from "../transaction/transaction.interface";

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

// Service for creating a budget
export const createBudget = async (budgetData) => {
  const budget = new BudgetModel(budgetData);
  await budget.save();
  return budget;
};

// Service for getting a budget by userId
export const getBudgetByUserId = async (userId) => {
  const budget = await BudgetModel.findOne({ userId });
  return budget;
};
