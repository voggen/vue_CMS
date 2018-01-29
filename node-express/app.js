var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//定义路由
var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');
var category = require('./routes/category');
var detail = require('./routes/detail')

var app = express();

//中间件 
app.all("*",function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*"); //允许所有访问者跨域请求
  next() //传递
})



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

//使用路由
app.use('/', index);
app.use('/users', users);
app.use('/list', category);
app.use('/api',api)
app.use('/detail',detail)

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
