import { Request, Response } from "express";
import { fetchCategoriesFromDB } from "./catogory.service";

export const fetchCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories = await fetchCategoriesFromDB();
    res.status(200).json({
      error: false,
      data: categories,
      message: "Categories fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Fetching categories failed: ${error.message}`,
    });
  }
};
