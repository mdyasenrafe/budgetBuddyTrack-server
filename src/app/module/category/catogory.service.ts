import { ICategory } from "./category.interface";
import CategoryModel from "./category.model";

export const fetchCategoriesFromDB = async (): Promise<ICategory[]> => {
  const categories = await CategoryModel.find();
  return categories;
};
