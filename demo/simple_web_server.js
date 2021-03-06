// 使用 Node 创建 Web 服务器
var http = require('http');
var fs = require('fs');
var url = require('url');

// 创建服务器
http.createServer( function (req, res) {
	// 解析请求，包括文件名
	var pathname = url.parse(req.url).pathname;

	// 输出请求ude文件名
	console.log('Request for ' + pathname + ' received.');

	// 从文件系统中读取请求的文件内容
	fs.readFile(pathname.substr(1), function (err, data){
		if(err){
			console.log(err);
			// HTTP 状态码: 404 : NOT FOUND
			// Content Type: text/plain
			res.writeHead(404, {'Content-Type': 'text/html'});
		}else{
			// HTTP 状态码: 200 : OK
			// Content Type: text/plain
			res.writeHead(200, {'Content-Type': 'text/html'});    

			// 响应文件内容
			res.write(data.toString()); 
		}

		// 发送响应数据
		res.end();
	});
}).listen(3000);
 
// 控制台会输出以下信息
console.log('Server running at http://localhost:3000/');