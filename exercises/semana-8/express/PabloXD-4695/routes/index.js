import express from "express";
import { topicModel } from "../topics/model.js";
import crypto from "crypto";

export const topicRouter = express.Router();

// Create new blog topic
topicRouter.post("/", async (req, res) => {
  const permalink = crypto.randomBytes(16).toString("base64Url");
  const date = new Date().toISOString();
  const topicToSave = { ...req.body, date, permalink };
  const createdTopic = await topicModel.create(topicToSave);
  res.status(201).json({ topic: createdTopic });
});

// Read All Blog topics
topicRouter.get("/", async (req, res) => {
  const topics = await topicModel.find({}).sort({ date: -1 }).limit(10);
  res.status(200).json({ topics });
});

// Read a specific topic
topicRouter.get("/:permalink", async (req, res) => {
  const topic = await topicModel.findOne({ permalink: req.params.permalink });
  res.status(200).json({ topic });
});

// Update a topic
topicRouter.patch("/:permalink", async (req, res) => {
  console.log({ ...req.body});
  const updatedTopic = await topicModel.findOneAndUpdate({ permalink: req.params.permalink }, { ...req.body})
  res.status(200).json({ topic: updatedTopic });
});

// Delete a topic
topicRouter.delete("/:permalink", async (req, res) => {
  const deletedTopic = await topicModel.findOneAndDelete({
    permalink: req.params.permalink,
  });
  res.status(200).json({ topic: deletedTopic });
});