import { createUser } from "./user.service";

export const registerUser = async (req, res) => {
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

export const testingRoute = async (req, res) => {
  return res.status(200).json({
    status: "Success",

    message: "User registered successfully.",
  });
};
