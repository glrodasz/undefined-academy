const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    formacion: String,
    ubicacionTienda: String,
    cliente: {
      objeto: String,
      cuponUsado: Boolean,
      metodoCompra: String
    }
});

module.exports = mongoose.model('Products', ProductSchema);