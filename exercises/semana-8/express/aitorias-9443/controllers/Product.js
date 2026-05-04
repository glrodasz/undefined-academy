const Product = require("../models/Product");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.render("products", { title: "Listado de productos", products });
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      res.status(500).send("Error del servidor: " + error.message);
    }
  },

  getCreateProductPage: (req, res) => {
    res.render("createProduct", { title: "Crear producto" });
  },

  createProduct: async (req, res) => {
    try {
      const { name, description, price } = req.body;

      const product = new Product({ name, description, price });
      await product.save();

      res.redirect("/products");
    } catch (error) {
      console.error("Error al crear el producto:", error);
      res.status(500).send("Error del servidor: " + error.message);
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.render("product", { title: "Detalles del producto", product });
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      res.status(500).send("Error del servidor: " + error.message);
    }
  },

  getEditProductPage: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.render("editProduct", { title: "Editar producto", product });
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      res.status(500).send("Error del servidor: " + error.message);
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { name, description, price } = req.body;
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      product.name = name;
      product.description = description;
      product.price = price;
      await product.save();
      res.redirect("/products");
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      res.status(500).send("Error del servidor: " + error.message);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.redirect("/products");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      res.status(500).send("Error del servidor: " + error.message);
    }
  },
};
