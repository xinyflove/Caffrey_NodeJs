var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', function (req, res) {
	var jsonpath = __dirname + '/' + 'users.json';
	fs.readFile( jsonpath, 'utf-8', function(err, data){
		console.log(data);
		res.end(data);
	});
});

var server = app.listen(3002, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("应用实例，访问地址为 http://%s:%s", host, port)
});