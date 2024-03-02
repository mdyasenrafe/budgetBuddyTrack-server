import { ITransaction } from "./transaction.interface";
import TransactionModel from "./transaction.model";

export const createExpenseTransaction = async (
  body: ITransaction
): Promise<ITransaction> => {
  const transaction = await TransactionModel.create(body);
  return transaction;
};

export const fetchTransactionHistory = async (
  userId: string
): Promise<ITransaction[] | null> => {
  const transactions = await TransactionModel.find({ userId });
  return transactions;
};
