//链式流-解压
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('data/input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('data/input.txt'));
  
console.log("文件解压完成。");