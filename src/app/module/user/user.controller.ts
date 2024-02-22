import { Request, Response } from "express";
import { createUser } from "./user.service";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const registrationData = req.body;
    const newUser = await createUser(registrationData);
    return res.status(201).json({
      status: "Success",
      data: newUser,
      message: "User registered successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: `Registration failed: ${error.message}`,
    });
  }
};
