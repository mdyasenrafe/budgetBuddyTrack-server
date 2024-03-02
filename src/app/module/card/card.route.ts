import express from "express";
import { verifyAuthToken } from "../../config/verifyAuthToken";
import { CreateCard, GetCard } from "./card.controller";

const CardRouter = express.Router();

CardRouter.post("/create-card", verifyAuthToken, CreateCard);
CardRouter.get("/get-card", verifyAuthToken, GetCard);

export default CardRouter;
