import express from "express";
import mongoose from "mongoose";
// corss origin resource sharing
import cors from "cors";
import "dotenv/config";

import usersRoutes from "./routes/usersRoutes.js";
import postRouter from "./routes/postRouter.js";

import reelRoutes from "./routes/reelRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://instagram-mocha-three.vercel.app/",
    ],
  })
);

try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("MongDB connected successfully.");
} catch (error) {
  console.log("Something went wrong to connect database", error);
}

app.use("/users", usersRoutes);
app.use("/posts", postRouter);
app.use("/Reels", reelRoutes);
app.use("/stories", storyRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log(`server is running on http://localhost:${process.env.APP_PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World! Instagram server is running.");
});
