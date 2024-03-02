export interface ITransaction {
  userId: Object;
  category: Object;
  amount: number;
  description: string;
  type: "income" | "expense";
  date: Date;
  invoice?: string;
}
