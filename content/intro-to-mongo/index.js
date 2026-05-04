const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongo = require("./mongo");

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/posts", async (req, res) => {
  const posts = await mongo.getAll("posts");
  res.json({ posts });
});

app.post("/create-post", (req, res) => {
  const post = {};
  res.json({ post });
});

app.listen(
  PORT,
  console.log(`🌍 Server running on port http://localhost:${PORT}`)
);
