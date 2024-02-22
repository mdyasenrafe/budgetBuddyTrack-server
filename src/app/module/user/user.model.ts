import { Schema, model } from "mongoose";
import { UserDataType } from "./user.interface";

const UserSchema = new Schema<UserDataType>({
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
    default: "active",
  },
  profilePicture: String,
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = model<UserDataType>("User", UserSchema);

export default User;
