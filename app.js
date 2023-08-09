import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import userRoute from "./routes/user.js"
import taskRoute from "./routes/task.js"
import cors from "cors";

export const app=express()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:[process.env.FRONTEND_URI],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}));

config({path: './data/config.env'})


app.use("/users", userRoute);
app.use("/task", taskRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  
  
 