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

export const updatePassword = async (
  email: string,
  currentPassword: string
) => {
  const user = await User.updateOne(
    {
      email: email,
    },
    {
      $set: {
        password: currentPassword,
      },
    }
  );

  return user || null;
};
