//gets http module - http included in node.js to make it simple to create Node.js apps
var http = require('http');

//use createServer function to createServer which takes in a function as parameter
//returns server object
var userCount = 0;
http.createServer(function (request, response) {
	console.log('New connection.\n');
	userCount++;

	response.writeHead(200, {'Content-Type':  'text/plain'});
	response.write('Hello Bitch!\n');
	response.write('We have had '+userCount+' bitches visit this hoe\n');
	response.end();
}).listen(8080);
//listen tells server to expect input from port 8080
//function is an anonymous function bc not given a name

console.log('Server started...\n\n');


/*
Note: the counter goes up by two for each request,
this is because the browser is requesting the favicon 
from the server (http://localhost:8080/favicon.ico).
*/
