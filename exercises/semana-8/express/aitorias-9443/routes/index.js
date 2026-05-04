var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Semana 8 - Servidor con Express.js | by: Aitorias",
  });
});

module.exports = router;
