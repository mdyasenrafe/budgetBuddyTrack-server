export interface UserDataType {
  name: string;
  email: string;
  profilePicture?: string; // Optional since not always required
  password: string;
  status: "active" | "inactive";
}
