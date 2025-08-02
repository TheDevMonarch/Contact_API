import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";
import { config } from "dotenv";

config({path:'.env'})

export const isAuthenticated = async (req, res, next) => {
  const token = req.header("Auth");

  // console.log("check token", token);

  if (!token) {
    return res.status(401).json({ message: "Login First" });
  }

  const decoded = jwt.verify(token, process.env.JWT);
  const id = decoded.userId;

  let user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }

  req.user = user; // variable next to req.__ is flexible.

  next();

   
};
