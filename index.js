var express = require('express');
var ejs = require('ejs');
var serveStatic = require('serve-static'); //指定静态路径
var app = express();

app.set('views', './app/');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(serveStatic('app/'));

app.get('/home', function(req, res, next) {
  console.log('成功');
  res.render('index', {});

});

app.listen('8000');
