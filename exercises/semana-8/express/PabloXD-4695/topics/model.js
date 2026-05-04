import mongoose from "mongoose";
import { topicSchema } from "./schema.js";

export const topicModel = mongoose.model("topic", topicSchema);