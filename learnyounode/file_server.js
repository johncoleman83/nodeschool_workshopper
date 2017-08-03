/**
 * creating an HTTP file server with Node.js
 */

var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(
  function (request, response)
  {
    src = fs.createReadStream(path);
    src.pipe(response);
  });

server.listen(port);
