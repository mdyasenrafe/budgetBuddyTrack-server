export interface UserDataType {
  name: string;
  email: string;
  profilePicture?: string;
  password: string;
  status: "active" | "inactive";
  role: "admin" | "user";
}
