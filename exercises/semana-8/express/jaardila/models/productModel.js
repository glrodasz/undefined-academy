var mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    codigo: {
        type: String,
        unique: true,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: false,
    },
    categoria: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: false,
    },
    modelo: {
        type: String,
        required: false,
    },
    precio_compra: {
        type: Number,
        required: true,
    },
    precio_venta: {
        type: Number,
        required: true,
    },
    fecha_creacion: {
        type: Date,
        required: true,
    },
    vigente: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("producto", productSchema);