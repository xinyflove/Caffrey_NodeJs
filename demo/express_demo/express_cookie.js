// express_cookie.js 文件
var express      = require('express');
//解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
var cookieParser = require('cookie-parser');
 
var app = express();
app.use(cookieParser());
 
app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies)
});
 
app.listen(3001);