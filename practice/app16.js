/*Node.js 全局对象*/

// 输出全局变量 __filename 的值,当前正在执行的脚本的文件名
console.log( __filename );

// 输出全局变量 __dirname 的值,当前执行脚本所在的目录
console.log( __dirname );

function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);


console.error('错误信息');