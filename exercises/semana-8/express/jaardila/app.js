var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require("./database.js"); // DB connection, do not  ardila
var methodOverride = require('method-override'); // para los metodos HTTP PUT PATCH DELETE ardila

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products/products.js'); // path route ardila
var productFormsRouter = require('./routes/products/formsProduct.js'); // path route ardila

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')); // para los metodos HTTP PUT PATCH DELETE ardila

app.use('/', indexRouter);
app.use('/products', productsRouter); // config  ardila
app.use('/forms/products', productFormsRouter); // config  ardila

//add bootstrap ardila
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
