var express = require('express');
var app = express();
var fs = require('fs');

//获取用户列表 开始
app.get('/listUsers', function (req, res) {
	var jsonpath = __dirname + '/' + 'users.json';
	fs.readFile( jsonpath, 'utf-8', function(err, data){
		console.log(data);
		res.end(data);
	});
});
//获取用户列表 结束

//添加用户 开始
//添加的新用户数据
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}
app.get('/addUser', function (req, res) {
    var json_psth = __dirname + "/" + "users.json";
    // 读取已存在的数据
    fs.readFile( json_psth, 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));

        fs.writeFile(json_psth, JSON.stringify(data));
    });
});
//添加用户 结束

//删除用户 开始
var id = 4;
app.get('/deleteUser', function (req, res) {
    var json_psth = __dirname + "/" + "users.json";
    // First read existing users.
    fs.readFile( json_psth, 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + id];

        console.log( data );
        res.end( JSON.stringify(data));

        fs.writeFile(json_psth, JSON.stringify(data));
    });
});
//删除用户 结束

//显示用户详情 开始
app.get('/showUser/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
});
//显示用户详情 结束

var server = app.listen(3002, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("应用实例，访问地址为 http://%s:%s", host, port)
});