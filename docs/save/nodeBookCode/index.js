var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var a = 'ss';
var aa = "";
if (a === 's') {
  alert('');
} else {
  var ass;
}
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);

