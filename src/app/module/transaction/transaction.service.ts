import { TransactionDataType } from "./transaction.interface";
import TransactionModel from "./transaction.model";

export const addTransaction = async (
  body: TransactionDataType
): Promise<TransactionDataType> => {
  const transaction = await TransactionModel.create(body);
  return transaction;
};

export const getTransctionHistory = async (
  id: string
): Promise<TransactionDataType[] | null> => {
  const transaction = await TransactionModel.find({ userId: id });
  return transaction;
};
