import { Schema, model } from "mongoose";
import { BudgetDataType } from "./budget.interface";

const budgetTrackerSchema = new Schema<BudgetDataType>({
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

budgetTrackerSchema.index({ userId: 1, category: 1 }, { unique: true });

// Create the model from the schema
const BudgetModel = model<BudgetDataType>("BudgetTracker", budgetTrackerSchema);

export default BudgetModel;
