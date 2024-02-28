const mongoose = require("mongoose");

// Define the schema for the budget tracker
const budgetTrackerSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: [
      "Shopping",
      "Transportation",
      "Food",
      "Entertainment",
      "Utilities",
      "Healthcare",
      "Other",
    ], // Add more categories as needed
  },
  limit: {
    type: Number,
    required: true,
  },
  spent: {
    type: Number,
    required: true,
  },
  remaining: {
    type: Number,
    required: true,
  },
});

// Virtual field to check if the limit has been exceeded
budgetTrackerSchema.virtual("isOverLimit").get(function () {
  return this.spent > this.limit;
});

// Create the model from the schema
const BudgetTracker = mongoose.model("BudgetTracker", budgetTrackerSchema);

module.exports = BudgetTracker;
