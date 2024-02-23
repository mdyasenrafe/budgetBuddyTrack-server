import { Request, Response } from "express";
import { createUser, loginUser } from "./user.service";
import { UserDataType } from "./user.interface";
import bcrypt from "bcrypt";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password, name }: UserDataType = req.body;

    if (email && password && name) {
      const hashedPassword = await bcrypt.hash(password, 10);
      req.body["password"] = hashedPassword;
      const newUser = await createUser(req.body);

      return res.status(201).json({
        error: false,
        data: newUser,
        message: "User registered successfully.",
      });
    }

    return res.status(400).json({
      error: true,
      message: "Please provide an email address, password, and name.",
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
    const { email, password }: UserDataType = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: true,
        message: "Please provide an email address and password.",
      });
    }

    const user = await loginUser(email);

    if (!user?.email) {
      return res.status(401).json({
        error: true,
        data: user,
        message: "User not found.",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return res.status(200).json({
        error: false,
        data: user,
        message: "User signed in successfully.",
      });
    }

    return res.status(401).json({
      error: true,
      message: "Password did not match.",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Sign in failed: ${error.message}`,
    });
  }
};
