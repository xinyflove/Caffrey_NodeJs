//阻塞代码实例

var fs = require('fs');

var data = fs.readFileSync('data/input.txt');

console.log(data.toString());
console.log('程序执行结束!');