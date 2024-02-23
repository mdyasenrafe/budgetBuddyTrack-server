import User from "./user.model";

export const createUser = async (userData) => {
  const newUser = await User.create(userData);
  return newUser;
};
