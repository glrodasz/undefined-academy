import express from "express";
import { postModel } from "./model.js";
import crypto from "crypto";

export const postRouter = express.Router();

// CRUD: Create, Read, Update, Delete

// Create
postRouter.post("/", async (req, res) => {
  const permalink = crypto.randomBytes(16).toString("base64Url");
  const date = new Date().toISOString();
  const postToSave = { ...req.body, date, permalink };

  const createdPost = await postModel.create(postToSave);
  res.status(201).json({ post: createdPost });
});

// Read All
postRouter.get("/", async (req, res) => {
  // mongosse sort desc by date
  const posts = await postModel.find({}).sort({ date: -1 }).limit(10);
  res.status(200).json({ posts });
});

// Read
postRouter.get("/:permalink", async (req, res) => {
  const post = await postModel.findOne({ permalink: req.params.permalink });
  res.status(200).json({ post });
});

// Update
postRouter.patch("/:permalink", async (req, res) => {
  const permalink = req.params.permalink;
  const data = req.body;

  const updatedPost = await postModel.findOneAndUpdate({ permalink }, data, {
    new: true,
  });

  res.status(200).json({ post: updatedPost });
});

// Delete
postRouter.delete("/:permalink", async (req, res) => {
  const deletedPost = await postModel.findOneAndDelete({
    permalink: req.params.permalink,
  });
  res.status(200).json({ post: deletedPost });
});
