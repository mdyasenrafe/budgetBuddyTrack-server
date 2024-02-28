import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express();

// Routes
import userRoute from "./app/module/user/user.route";
import imageUploadRouter from "./app/config/imageUpload";
import categoryRoute from "./app/module/category/category.route";
import transactionRoute from "./app/module/transaction/transaction.route";

// Middleware
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(
  express.urlencoded({ limit: "25mb", extended: true, parameterLimit: 50000 })
);

app.use(bodyParser.text({ limit: "200mb" }));

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API.");
});

// Route usage
app.use("/auth", userRoute);
app.use("/category", categoryRoute);
app.use("/image", imageUploadRouter);
app.use("/transaction", transactionRoute);

// Undefined Route Handling
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: true, message: "Route not found." });
});

export default app;
