import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { topicRouter } from "./routes/index.js";

dotenv.config();
//const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority`;
const { PORT, MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME } = process.env;
//MONGODB LOCALHOST CONNECTION 
const MONGO_URI = 'mongodb://127.0.0.1/mongoose-shared-connection';
//MONGODB ATLAS CONNECTION
//const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority`; 

const app = express();
app.use(express.json());

//Routes
app.get("/", (req, res) => res.send("API is running"));
app.use("/topics", topicRouter);

app.listen(PORT, () => {
  console.log(`🌍 Server running on port http://localhost:${PORT}`);
  mongoose.connect(MONGO_URI, {
    dbName: "topicdatabase",
  });
});