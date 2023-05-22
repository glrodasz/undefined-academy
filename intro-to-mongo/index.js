const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongo = require("./mongo");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/posts", async (req, res, next) => {
  try {
    const posts = await mongo.getAll("posts");
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () =>
  console.log(`🌍 Server running on port http://localhost:${PORT}`)
);
