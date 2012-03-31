var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request " + pathname + "received.");

		route(handle, pathname, response);

		// response.writeHead(200, {
		// "Content-Type": "text/plain"
		// });
		// response.write("Hello World, 我说中文");
		// response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.")
}

exports.start = start;

