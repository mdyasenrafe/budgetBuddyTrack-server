import { Schema, model } from "mongoose";
import { CardDataType } from "./card.interface";

const cardOverViewSchema = new Schema<CardDataType>({
  userId: {
    ref: "User",
    type: Schema.Types.ObjectId,
    required: [true, "userId is required"],
  },
  totalBalance: {
    type: Number,
    required: [true, "Total balance is required"],
  },
  totalIncome: {
    type: Number,
    default: 0,
  },
  totalExpense: {
    type: Number,
    default: 0,
  },
});

// Create the model from the schema
const CardModel = model<CardDataType>("CardOverview", cardOverViewSchema);

export default CardModel;
