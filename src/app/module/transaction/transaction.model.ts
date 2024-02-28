import { Schema, model } from "mongoose";
import { TransactionDataType } from "./transaction.interface";

const TransactionSchema = new Schema<TransactionDataType>({
  userId: {
    ref: "User",
    type: Schema.Types.ObjectId,
    required: [true, "userId is required"],
  },
  category: {
    type: String,
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

const TransactionModel = model<TransactionDataType>(
  "Transaction",
  TransactionSchema
);

export default TransactionModel;
