import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import userRoute from "./routes/user.js"

export const app=express()
app.use(express.json());
app.use(cookieParser());

config({path: './data/config.env'})


app.use("/users", userRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  
  
 