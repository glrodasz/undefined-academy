var express = require('express');
var productRouter = express.Router();
var crypto = require('crypto');
var productModel = require('../../models/productModel.js');

// Read All
productRouter.get('/', async function (req, res, next) {
  const products = await productModel.find({}).sort({ date: -1 }).limit(50);
  res.render('products/indexProducts', { productos: products });
});

// Read One
productRouter.get("/:id", async (req, res) => {
  const product = await productModel.findOne({ _id: req.params.id });
  res.render('products/singleProduct', { producto: product });
});


// Create
productRouter.post("/", async (req, res) => {
  const codigo = crypto.randomBytes(16).toString("base64Url");
  const fecha_creacion = new Date().toISOString();
  const vigente = "SI";
  const postToSave = { ...req.body, fecha_creacion, codigo, vigente };
  await productModel.create(postToSave); // create: mongoose ODM method
  res.redirect('/products');
});

// Delete
productRouter.delete("/:id", async (req, res) => {
  await productModel.findOneAndDelete({ _id: req.params.id });
  res.redirect('/products');
});

// Update *No implementado en vistas
productRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const updatedProduct = await productModel
    .findOneAndUpdate({ _id: id }, data, { new: true, });
  res.status(200).json({ post: updatedProduct });
});

module.exports = productRouter;
