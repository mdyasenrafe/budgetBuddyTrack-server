import mongoose from "mongoose";
import BudgetModel from "./budget.model";

export const updateBudgetFromDb = async (userId: string) => {
  // Convert userId string to ObjectId
  const objectId = new mongoose.Types.ObjectId(userId);

  console.log("ObjectId for userId =>", objectId);

  // Perform the query using ObjectId
  const budget = await BudgetModel.findOne({
    userId: "65db1e13e48106cf541d49b4",
  });

  // Log the query result
  console.log("Model response", budget);

  // If null, log that no document was found
  if (!budget) {
    console.log("No document found for userId ObjectId:", objectId);
  }

  return budget;
};
