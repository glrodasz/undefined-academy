const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/Product");

// Ruta para el listado de productos
router.get("/", ProductController.getAllProducts);

// Ruta para la página de creación de productos
router.get("/create", ProductController.getCreateProductPage);

// Ruta para guardar el nuevo producto
router.post("/", ProductController.createProduct);

// Ruta para obtener un producto por ID
router.get("/:id", ProductController.getProductById);

// Ruta para la página de edición de producto
router.get("/:id/edit", ProductController.getEditProductPage);

// Ruta para actualizar los datos de un producto
router.post("/:id/edit", ProductController.updateProduct);

// Ruta para eliminar un producto
router.post("/:id/delete", ProductController.deleteProduct);

module.exports = router;
