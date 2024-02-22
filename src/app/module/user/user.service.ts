import { UserType } from "./user.interface";
import UserModel from "./user.model";

export const signupUserToDB = async (payload: UserType): Promise<UserType> => {
  const user = await UserModel.create(payload);
  return user;
};
