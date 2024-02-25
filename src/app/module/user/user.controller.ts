import { Request, Response } from "express";
import { createUser, loginUser, updatePassword } from "./user.service";
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

export const getUserInfoFromToken = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email } = req.user;
    const user = await loginUser(email);

    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User not found.",
      });
    }
    return res.status(200).json({
      error: false,
      data: user,
      message: "User information retrieved successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Error retrieving user information: ${error.message}`,
    });
  }
};
export const updateUserPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email } = req.user;
    const { currentPassword, newPassword, confirmPassword } = req.body;
    if (!currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        error: true,
        message:
          "Current password, new password, and password confirmation are required.",
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        error: true,
        message: "New password and password confirmation do not match.",
      });
    }

    const user = await loginUser(email);
    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User not found.",
      });
    }

    if (newPassword === currentPassword) {
      return res.status(400).json({
        error: true,
        message:
          "The new password cannot be the same as the current password. Please choose a different password.",
      });
    }

    const isValidPassword = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isValidPassword) {
      return res.status(401).json({
        error: true,
        message: "Invalid current password.",
      });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await updatePassword(email, hashedNewPassword);

    res.status(200).json({
      error: false,
      message: "Password successfully updated.",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Failed to update password: ${error.message}`,
    });
  }
};
