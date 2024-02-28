import { Request, Response } from "express";
import { getCategoryDb } from "./catogory.service";

export const getCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories = await getCategoryDb();
    return res.status(200).json({
      error: false,
      data: categories,
      message: "get category fetch succesfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Registration failed: ${error.message}`,
    });
  }
};
