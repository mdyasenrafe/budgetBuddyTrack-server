import express from "express";
import { verifyAuthToken } from "../../config/verifyAuthToken";
import { createCard, getCardDetails } from "./card.controller";

const cardRouter = express.Router();

cardRouter.post("/create-card", verifyAuthToken, createCard);
cardRouter.get("/get-card", verifyAuthToken, getCardDetails);

export default cardRouter;
