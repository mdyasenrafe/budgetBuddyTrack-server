import { TransactionDataType } from "../transaction/transaction.interface";
import { CardDataType } from "./card.interface";
import CardModel from "./card.model";

export const CreateCardFromDB = async (
  cardData: CardDataType
): Promise<CardDataType> => {
  const newCard = await CardModel.create(cardData);
  return newCard;
};

export const GetCardFromDB = async (
  id: string
): Promise<CardDataType | null> => {
  const newCard = await CardModel.findOne({ userId: id });
  return newCard;
};

export const updateCardFromDB = async (
  bodyData: TransactionDataType,
  type: string
) => {
  const { userId, amount } = bodyData;
  const query = { userId };
  let update = {};

  if (type === "expense") {
    update = {
      $inc: {
        totalBalance: -amount,
        totalExpense: amount,
      },
    };
  }
  const updatedCard = await CardModel.findOneAndUpdate(query, update);

  console.log("updated card =>", updatedCard);
};
