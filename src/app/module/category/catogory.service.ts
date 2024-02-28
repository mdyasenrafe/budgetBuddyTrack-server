import { CategoryDataType } from "./category.interface";
import Category from "./category.model";

export const getCategoryDb = async (): Promise<CategoryDataType[]> => {
  const categories = await Category.find();

  return categories;
};
