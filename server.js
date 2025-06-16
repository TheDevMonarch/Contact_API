import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./Routes/user.js";
import contactRouter from "./Routes/contact.js";
import { config } from "dotenv";

//To secure the port, Database string uri we use .env and these variable in .env file
// For that npm i dotenv and install npm i cors, cors to not get error of cors to frontend developers
// add .env file in .gitignore

//.env setup
config({path:'.env'})


const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//user routes
app.use("/api/user", userRouter);

//contact router
app.use("/api/contact", contactRouter);

//Home route
app.get("/", (req, res) => {
  res.json({ message: "This is home route" });
});

mongoose
  .connect(
    process.env.MONGO_URI,
    { dbName: "Nodejs_Mastery_Course" }
  )
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
