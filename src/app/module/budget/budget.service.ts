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

// Service for creating a budget
export const createBudget = async (budgetData: BudgetDataType) => {
  const { userId, category } = budgetData;
  const query = {
    userId,
    category,
  };
  const update = { $set: budgetData };
  const options = { upsert: true };

  const budget = await BudgetModel.updateOne(query, update, options);
  return budget;
};

// Service for getting a budget by userId
export const getBudgetByUserId = async (userId) => {
  const budget = await BudgetModel.findOne({ userId });
  return budget;
};
