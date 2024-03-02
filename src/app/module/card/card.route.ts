import express from "express";
import { verifyAuthToken } from "../../config/verifyAuthToken";
import { CreateCard } from "./card.controller";

const CardRouter = express.Router();

CardRouter.post("/create-card", verifyAuthToken, CreateCard);

export default CardRouter;
