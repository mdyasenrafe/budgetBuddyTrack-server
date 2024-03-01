import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const budgetTrackerSchema = new mongoose.Schema({
  userId: {
    ref: "User",
    type: Schema.Types.ObjectId,
    required: [true, "userId is required"],
  },
  category: {
    ref: "Category",
    type: Schema.Types.ObjectId,
    required: [true, "Category is required"],
  },
  limit: {
    type: Number,
    required: [true, "Limit is required"],
  },
  spent: {
    type: Number,
  },
  remaining: {
    type: Number,
  },
});

budgetTrackerSchema.virtual("isOverLimit").get(function () {
  return this.spent > this.limit;
});

// Create the model from the schema
const BudgetModel = model("BudgetTracker", budgetTrackerSchema);

export default BudgetModel;
