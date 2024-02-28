import express from "express";
import { fetchCategories } from "./category.cotroller";

const categoryRoute = express.Router();

categoryRoute.get("/categories", fetchCategories);

export default categoryRoute;
