import { Schema, model } from "mongoose";

const UserSchema = new Schema({
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

const User = model("User", UserSchema);

export default User;
