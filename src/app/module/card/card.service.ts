import { ITransaction } from "../transaction/transaction.interface";
import { ICardData } from "./card.interface";
import CardModel from "./card.model";

export const createCardInDB = async (
  cardData: ICardData
): Promise<ICardData> => {
  const newCard = await CardModel.create(cardData);
  return newCard;
};

export const getCardDetailsFromDB = async (
  userId: string
): Promise<ICardData | null> => {
  const card = await CardModel.findOne({ userId });
  return card;
};

export const updateCard = async (bodyData: ITransaction, type: string) => {
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
