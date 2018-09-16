var http = require('http'),
  fs = require('fs'),
  url = require('url'),
  port = 27017;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  var pathname = parsedUrl.pathname;

  if (pathname == '/listings') {
    console.log('Loading listings...\n');
    response.writeHead(200, {
      'Content-Type': 'application/json'
      //content must be specified as JSON format
    });
    response.end(JSON.stringify(listingData));
  } else {
    response.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    console.log('No request handler found for ' + pathname+'\n');
    response.write('Bad gateway error');
    response.end();
  }
};
//readFile runs as the first function, asynchronously loads JSON dats into
//listingsData and creates the server using requestHandler as the 'function'/var
fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err) {
    throw err;
  }
  listingData = JSON.parse(data);
  //create server
  http.createServer(requestHandler).listen(port);
  console.log('Server Started - listening on: http://localhost:' + port+'\n____________________________________________________\n');
});
