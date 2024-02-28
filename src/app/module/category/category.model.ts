import { Schema, model } from "mongoose";
import { CategoryDataType } from "./category.interface";
import { type } from "os";

const CategorySchema = new Schema<CategoryDataType>({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["income", "expense"],
    required: true,
  },
});

const Category = model<CategoryDataType>("categories", CategorySchema);
export default Category;
