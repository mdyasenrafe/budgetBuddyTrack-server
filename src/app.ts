import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// Routes
import userRoute from "./app/module/user/user.route";
import imageUploadRouter from "./app/module/config/imageUpload";

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API.");
});

// Route usage
app.use("/auth", userRoute);
app.use("/image", imageUploadRouter);

// Undefined Route Handling
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: true, message: "Route not found." });
});

export default app;
