var express = require('express');
var router = express.Router();

//Form Create
router.get('/create', function (req, res, next) {
    res.render('products/formCreateProduct');
});

//alert delete
router.get('/delete/:id/:nombre', function (req, res, next) {
    const id = req.params.id;
    const nombre = req.params.nombre;
    res.render('products/deleteProduct', { id: id, nombre: nombre });
});

module.exports = router;