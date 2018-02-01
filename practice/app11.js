//链式流-压缩
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('data/input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('data/input.txt.gz'));
  
console.log("文件压缩完成。");