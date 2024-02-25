export interface UserDataType {
  _id?: string;
  name: string;
  email: string;
  profilePicture?: string;
  password: string;
  status: "active" | "inactive";
  role: "admin" | "user";
}
