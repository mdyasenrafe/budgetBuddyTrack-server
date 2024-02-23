import { UserDataType } from "./user.interface";
import User from "./user.model";

export const createUser = async (
  userData: UserDataType
): Promise<UserDataType> => {
  const newUser = await User.create(userData);
  return newUser;
};

export const loginUser = async (
  email: string
): Promise<UserDataType | null> => {
  const user = await User.findOne({
    email: email,
  });

  return user || null;
};
