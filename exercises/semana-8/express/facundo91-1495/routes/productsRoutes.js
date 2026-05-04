var express = require("express");
var router = express.Router();
const Product = require("../schemas/productSchema");


router.get("/", async function (req, res, next) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
});

router.post("/", async function (req, res, next) {
  try {
    const producto = new Product(req.body);
    await producto.save();
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el producto" });
  }
});

module.exports = router;