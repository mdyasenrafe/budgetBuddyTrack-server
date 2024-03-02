import { Request, Response } from "express";
import { CardDataType } from "./card.interface";
import { CreateCardFromDB } from "./card.service";

export const CreateCard = async (req: Request, res: Response) => {
  try {
    const bodyData: CardDataType = req.body;
    const newCard = await CreateCardFromDB(bodyData);
    console.log("new card =>", newCard);
    return res.status(200).json({
      error: false,
      data: newCard,
      message: "Create card sucesfully",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Failed to create card: ${error.message}`,
    });
  }
};
