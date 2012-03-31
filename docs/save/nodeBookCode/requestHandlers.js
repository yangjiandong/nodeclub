var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called.");

	//exec("ls -lah", {
	exec("find /", {
		timeout: 10000,
		maxBuffer: 20000 * 1024
	},
	function(error, stdout, stderr) {
		response.writeHead(200, {
			"Content-Type": "text/plain"
		});
		response.write(stdout);
		response.end();
		// body...
	})
}

function upload(response) {
	console.log("Request handler 'upload' was called. ");

	response.writeHead(200, {
		"Context-Type": "text/plain"
	});
	response.write("No Block,you dont wait...");
	response.write("Hello Upload");
	response.end();
};

//sleep(1000)
function sleep(milliSeconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
}

exports.start = start;
exports.upload = upload;

