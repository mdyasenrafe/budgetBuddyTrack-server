export interface TransactionDataType {
  userId: Object;
  category: string;
  amount: number;
  description: string;
  type: "income" | "expense";
  date: Date;
  invoice?: string;
}
