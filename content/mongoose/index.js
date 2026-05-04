import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import { postRouter } from "./posts/router.js";

const { PORT, MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME } = process.env;
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority`;

const app = express();

// Global Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is running"));
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`🌍 Server running on port http://localhost:${PORT}`);
  mongoose.connect(MONGO_URI, {
    dbName: "sample_training",
  });
});
