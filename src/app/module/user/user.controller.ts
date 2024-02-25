import { Request, Response } from "express";
import { createUser, loginUser } from "./user.service";
import { UserDataType } from "./user.interface";
import bcrypt from "bcrypt";
import generateToken from "../../config/GenerateToken";

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
      const token = generateToken(email, newUser?._id, name);
      return res.status(201).json({
        error: false,
        data: newUser,
        message: "User registered successfully.",
        token: token,
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
        message: "User not found.",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = generateToken(user.email, user?._id, user.name);
      return res.status(200).json({
        error: false,
        data: user,
        message: "User signed in successfully.",
        token: token,
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

export const userInfoFromToken = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, email } = req;
    const user = await loginUser(email);

    if (!user?.email) {
      return res.status(401).json({
        error: true,
        message: "User not found.",
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
