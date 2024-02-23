import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// route
import UserRoute from "./app/module/user/user.route";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from typescript");
});

app.use("/auth", UserRoute);

// Undefined Route Implement
app.use((req: Request, res: Response, next) => {
  res
    .status(404)
    .json({ status: 404, error: true, message: "Not Found this route" });
});

export default app;
