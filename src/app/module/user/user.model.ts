import { Schema, model, Model } from "mongoose";
import { UserType } from "./user.interface";

const userSchema = new Schema<UserType>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  profilePicture: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = model<UserType>("user", userSchema);

export default UserModel;
