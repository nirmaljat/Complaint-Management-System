import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        dbName: "backend",
      })
      .then((c) => console.log(`Database Connected with `))
      .catch((e) => console.error("Connection error:", e));
  };