import { CardDataType } from "./card.interface";
import CardModel from "./card.model";

export const CreateCardFromDB = async (
  cardData: CardDataType
): Promise<CardDataType> => {
  const newCard = await CardModel.create(cardData);
  return newCard;
};
