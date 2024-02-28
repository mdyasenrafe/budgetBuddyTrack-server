import { Schema, model } from "mongoose";
import { ICategory } from "./category.interface";

const CategorySchema = new Schema<ICategory>({
  label: { type: String, required: true },
  value: { type: String, required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
});

const CategoryModel = model<ICategory>("Category", CategorySchema);
export default CategoryModel;
