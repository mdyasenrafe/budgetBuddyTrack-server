import express from "express";
import { getCategory } from "./category.cotroller";

const categoryRoute = express.Router();

categoryRoute.get("/get-category", getCategory);

export default categoryRoute;
