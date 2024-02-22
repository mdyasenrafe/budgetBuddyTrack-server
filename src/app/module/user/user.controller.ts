import { Request, Response } from "express";
import { signupUserToDB } from "./user.service";

export const signupUser = async (req: Request, res: Response) => {
  try {
    // body data looks like
    const data = req.body;
    const user = await signupUserToDB(data);
    return res
      .status(201)
      .json({
        status: "success",
        data: user,
        message: "user signup succesfully",
      });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
