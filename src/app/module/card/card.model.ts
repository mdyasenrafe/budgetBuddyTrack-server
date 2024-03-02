import { Schema, model } from "mongoose";
import { ICardData } from "./card.interface";

const cardOverViewSchema = new Schema<ICardData>({
  userId: {
    ref: "User",
    type: Schema.Types.ObjectId,
    required: [true, "userId is required"],
    unique: [true, "Already exists"],
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
const CardModel = model<ICardData>("CardOverview", cardOverViewSchema);

export default CardModel;
