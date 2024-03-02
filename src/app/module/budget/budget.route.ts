import express from "express";
import { createBudget, getBudgetByUserId } from "./budget.controller";
import { verifyAuthToken } from "../../config/verifyAuthToken";

const budgetRouter = express.Router();

budgetRouter.post("/create-budget", verifyAuthToken, createBudget);
budgetRouter.get("/get-budget/:userId", verifyAuthToken, getBudgetByUserId);

export default budgetRouter;
