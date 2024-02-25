import jwt from "jsonwebtoken";

const generateToken = (email, id) => {
  return jwt.sign(
    {
      email: email,
      id: id,
    },
    process.env.JWT_SECRET
  );
};

export default generateToken;
