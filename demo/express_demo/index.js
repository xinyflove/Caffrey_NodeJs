var express = require('express');
var app = express();
//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
var bodyParser = require('body-parser');
var fs = require("fs");
//node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
var multer  = require('multer');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));//加载静态文件夹
//有这行代码就不需要在app.post传urlencodedParser了
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: __dirname + '/data/tmp/'}).array('image'));

//  主页输出 "Hello World"
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   //res.send('Hello GET');
   res.sendFile( __dirname + "/view/" + "index.html" );
});
 
 
//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
});
 
//  /del_user 页面响应
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
});
 
//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
});
 
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
});

//get提交
app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});
//post提交
app.post('/process_post', urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});
//文件上传
app.post('/file_upload', function (req, res) {
 
   console.log('上传的文件信息', req.files[0]);  // 上传的文件信息
 
   var filename = req.files[0].originalname;//上传图片名称
   var des_file = __dirname + "/data/upload/" + filename;//保存图片路径
   var path = req.files[0].path;//图片缓存路径
   fs.readFile( path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:filename
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	//console.log(server);
	console.log('应用实例，访问地址为 http://%s:%s', host, port);
});;