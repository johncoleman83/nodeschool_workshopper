/**
 * creating an HTTP file server with Node.js that
 * returns UPCASE for all POST requests
 */

var fs = require('fs');
var http = require('http');
var port = process.argv[2];

var server = http.createServer(
  function (request, response)
  {
    if (request.method == 'POST')
    {
      var body = '';
      request.on('data', function (data) {
        body += data;
      });

      request.on('end', function () {
        body = body.toUpperCase();
        response.write(body);
        response.end();
      });
    }
  });

server.listen(port);
