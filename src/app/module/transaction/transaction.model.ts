import { Schema, model } from "mongoose";
import { ITransaction } from "./transaction.interface";

const TransactionSchema = new Schema<ITransaction>({
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
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },
  type: {
    type: String,
    enum: ["income", "expense"],
    required: [true, "Type is required"],
  },
  invoice: {
    type: String,
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
});

const TransactionModel = model<ITransaction>("Transaction", TransactionSchema);

export default TransactionModel;
