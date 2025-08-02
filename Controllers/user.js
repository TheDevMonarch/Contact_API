import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { config } from "dotenv";  

//.env setup
config({path:'.env'})

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (name === "" || email === "" || password === "") {
    return res.status(400).json({ message: "All fields are mendatory" });
  }

  let user = await User.findOne({ email: email });
  if (user) {
    return res.status(409).json({ message: "User Already Exist", success: false });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashPassword });
  // console.log('printing the data = ', req.body)
 return res.status(201).json({ message: "user created successfully", success: true, user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    return res.status(400).json({ message: "All fields are mendatory" });
  }

  let user = await User.findOne({email:email})
  if(!user)
  {return res.status(404).json({message: "User does not exist", success:false});}

  const validPass =  await bcrypt.compare(password, user.password);

  if(!validPass){
    return res.status(401).json({messaage:"Invalid Password", success: false});
  }

  //Only give user id in token because with help of token we can access the user id.
  // If we pass whole user data then anyone can access user data with token pasting on jwt.io from web browser
  const token = jwt.sign({userId:user._id}, process.env.JWT, {
    expiresIn:'1d'
  });

  return res.status(200).json({message: `Welcome ${user.name}`, token, success:true})
};
