import { TransactionDataType } from "./transaction.interface";
import TransactionModel from "./transaction.model";

export const addTransaction = (
  body: TransactionDataType
): Promise<TransactionDataType> => {
  const transaction = TransactionModel.create(body);
  console.log("transaction =>", transaction);
  return transaction;
};
