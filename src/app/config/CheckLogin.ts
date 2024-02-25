const jwt = require("jsonwebtoken");
import { Request, Response } from "express";

const checkLogin = (req: Request, res: Response, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email, id, name } = decoded;
    req.email = email;
    req.id = id;
    req.name = name;
    next();
  } catch (err) {
    res.status(401).json({ error: true, message: "Invalid Token" });
  }
};

export default checkLogin;
