var http = require("http");
var url = require("url");
var formidable=require('formidable'),
    sys = require('sys');

function start(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request " + pathname + "received.");

		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk '" + postDataChunk + "'.")
			// body...
		})

		request.addListener("end", function function_name() {
			// body...
			route(handle, pathname, response, postData);

		})

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

