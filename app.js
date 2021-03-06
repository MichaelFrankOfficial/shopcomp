var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var before_you_buy = require('./routes/before-you-buy');
var why_shop_comp = require('./routes/why-shop-comp');
var claims = require('./routes/claims');
var employee_or_independent_contractor = require('./routes/employee-or-independent-contractor');
var north_carolina = require('./routes/north-carolina');
var south_carolina = require('./routes/south-carolina');
var georgia = require('./routes/georgia');
var florida = require('./routes/florida');
var constructionandtrade = require('./routes/construction-and-trade-contractors');
var accommodationandfood = require('./routes/accommodation-and-food-services');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/claims', claims);
app.use('/before-you-buy', before_you_buy);
app.use('/why-shop-comp', why_shop_comp);
app.use('/employee-or-independent-contractor', employee_or_independent_contractor);
app.use('/north-carolina', north_carolina);
app.use('/south-carolina', south_carolina);
app.use('/georgia', georgia);
app.use('/florida', florida);
app.use('/construction-and-trade-contractors', constructionandtrade);
app.use('/accommodation-and-food-services', accommodationandfood);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
