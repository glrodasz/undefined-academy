import mongoose from "mongoose";
import { Decimal128 } from "mongoose";

export const productSchema = mongoose.Schema({
  short_id: {
    type: Number,
    unique: true,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Decimal128,
    required: true,
  },
  tags: {
    type: [String],
  },
  image: {
    type: String,
  }
});