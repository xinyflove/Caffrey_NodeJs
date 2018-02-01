//Node.js 创建第一个应用

//step1. 通过require引入http模块
var http = require('http');

//step2. 创建服务器
http.createServer(function(request, response){
	
	// 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	// 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(3000);

// 终端打印如下信息
console.log('Server running at http://localhost:3000/');