import { Request, Response } from "express";
import { createUser, loginUser } from "./user.service";
import { UserDataType } from "./user.interface";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const registrationData = req.body;
    const newUser = await createUser(registrationData);
    return res.status(201).json({
      error: false,
      data: newUser,
      message: "User registered successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Registration failed: ${error.message}`,
    });
  }
};
export const signInUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const signInData: UserDataType = req.body;

    if (!signInData?.email) {
      return res.status(400).json({
        error: true,
        message: "Please provide an email address.",
      });
    }

    const user = await loginUser(signInData);

    if (!user?.email) {
      return res.status(401).json({
        error: true,
        data: user,
        message: "Password didn't match.",
      });
    }

    return res.status(200).json({
      error: false,
      data: user,
      message: "User signed in successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Sign in failed: ${error.message}`,
    });
  }
};
