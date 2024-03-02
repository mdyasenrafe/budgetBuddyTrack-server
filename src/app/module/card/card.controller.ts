import { Request, Response } from "express";
import { ICardData } from "./card.interface";
import { createCardInDB, getCardDetailsFromDB } from "./card.service";

export const createCard = async (req: Request, res: Response) => {
  try {
    const cardData: ICardData = req.body;
    const newCard = await createCardInDB(cardData);
    return res.status(201).json({
      error: false,
      data: newCard,
      message: "Card created successfully.",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Failed to create card: ${error.message}`,
    });
  }
};

export const getCardDetails = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id; // Adjusted according to the comment

    const cardInfo = await getCardDetailsFromDB(userId);
    return res.status(200).json({
      error: false,
      data: cardInfo,
      message: "Card details fetched successfully.",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Failed to fetch card details: ${error.message}`,
    });
  }
};
