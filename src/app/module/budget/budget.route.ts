import express from "express";
import { createBudget, getBudgetByUserId } from "./budget.controller";

const budgetRouter = express.Router();

budgetRouter.post("/create-budget", createBudget);
budgetRouter.get("/get-budget/:userId", getBudgetByUserId);

export default budgetRouter;
