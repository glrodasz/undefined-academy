import express from 'express';
import { productModel } from "./model.js";

export const productRouter = express.Router();

//CRUD: Create, Read, Update, Delete


//Create with curl
productRouter.post("/add-product", async (req, res)=>{
  const products = await productModel.find({});
  const short_id = products.length;
  const product = {...req.body, short_id}
  const createProduct = await productModel.create(product);
  res.status(201).json({ product: createProduct });
});

// curl --request POST http://localhost:3001/products/add-product --header "Content-Type: application/json" --data '{ "product_name": "Test 1", "description": "Test 1.", "tags": ["t1.1", "t1.2", "t1.3"], "price": 30.00 }'



//Read All with link / curl
productRouter.get("/", async (req, res)=>{
  const products = await productModel.find({})//.limit(10);
  res.status(200).json({ products: products });
});

// http://localhost:3001/products
// curl --silent --request GET http://localhost:3001/products



//Read with link / curl
productRouter.get("/:short_id", async (req, res)=>{
  const product = await productModel.findOne({ short_id: req.params.short_id });
  res.status(200).json({ product: product });
});

// http://localhost:3001/products/50
// curl --silent --request GET http://localhost:3001/products/50



//Delete with curl
productRouter.delete("/delete/:short_id", async (req, res)=>{
  const productDeleted = await productModel.findOneAndDelete({ short_id: req.params.short_id });
  res.status(200).json({ product: productDeleted });
});

// curl --request DELETE http://localhost:3001/products/delete/50