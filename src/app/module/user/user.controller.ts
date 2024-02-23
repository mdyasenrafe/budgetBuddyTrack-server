import { Request, Response } from "express";
import { createUser, loginUser } from "./user.service";
import { UserDataType } from "./user.interface";
import bcrypt from "bcrypt";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const registrationData: UserDataType = req.body;
    const { email, password, name } = req.body;
    if (email && password && name) {
      let hashedPassword = await bcrypt?.hash(password, 10);
      registrationData["password"] = hashedPassword;
      const newUser = await createUser(registrationData);
      return res.status(201).json({
        error: false,
        data: newUser,
        message: "User registered successfully.",
      });
    }
    return res.status(400).json({
      error: true,
      message: "Please provide an email address and password",
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
    const { email, password } = signInData;
    console.log(password);
    if (!email || !password) {
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
        message: "user didn't find.",
      });
    }
    const ValidPassword = await bcrypt.compare(password, user?.password);

    if (ValidPassword) {
      return res.status(200).json({
        error: false,
        data: user,
        message: "User signed in successfully.",
      });
    }
    return res.status(401).json({
      error: true,
      message: "password didn't match",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Sign in failed: ${error.message}`,
    });
  }
};
