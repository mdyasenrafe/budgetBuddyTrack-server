import jwt from "jsonwebtoken";

const generateToken = (email, id, name) => {
  return jwt.sign(
    {
      email: email,
      id: id,
      name: name,
    },
    process.env.JWT_SECRET
  );
};

export default generateToken;
