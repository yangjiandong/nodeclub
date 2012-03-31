var exec = require("child_process").exec;
var querystring = require("querystring");

function start(response, postData) {
	console.log("Request handler 'start' was called.");

	var body = '<html><head>';
	body += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></head>';
	body += '<body><form action="/upload" method="post">';
	body += '<textarea name="text" rows="20" cols="60" ></textarea>';
	body += '<input type="submit" value="Submit text" />';
	body += '</form></body></html>';

	//exec("ls -lah", {
	// exec("find /", {
	// timeout: 10000,
	// maxBuffer: 20000 * 1024
	// },
	// function(error, stdout, stderr) {
	// response.writeHead(200, {
	// "Content-Type": "text/plain"
	// });
	//
	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.write(body);
	response.end();
	// body...
	//})
}

function upload(response, postData) {
	console.log("Request handler 'upload' was called. ");

	response.writeHead(200, {
		"Context-Type": "text/html; charset=UTF-8"
	});
	//response.write("No Block,you dont wait...");
	//response.write("Hello Upload");
	response.write("You've sent the text: " + querystring.parse(postData).text);
	response.end();
};

//sleep(1000)
function sleep(milliSeconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
}

exports.start = start;
exports.upload = upload;

