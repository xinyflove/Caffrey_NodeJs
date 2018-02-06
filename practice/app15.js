var server = require("./module/server");
var router = require("./module/router");
 
server.start(router.route);