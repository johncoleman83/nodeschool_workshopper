/**
 * creating an HTTP file server with Node.js that
 * returns JSON API
 */

var url = require('url');
var fs = require('fs');
var http = require('http');
var port = process.argv[2];

function callback(request, response)
{
  urlContent = url.parse(request.url, true);
  dt = urlContent.query.iso;

  if (request.method == 'GET' &&
      request.url.substring(0, 14) == '/api/parsetime')
  {
    dt = dt.split(':');
    var resDict = {
      hour: parseInt(dt[0].split('T')[1]) + 17,
      minute: parseInt(dt[1]),
      second: parseInt(dt[2].split('.')[0]),
    };
  } else if (request.method == 'GET' &&
             request.url.substring(0, 13) == '/api/unixtime') {
    var resDict = { unixtime: Date.parse(dt) };
  } else {
    var resDict = null;
    response.writeHead(404);
    response.end();
  };

  if (resDict) {
    resDictString = JSON.stringify(resDict);

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(resDictString);
    response.end();
  };
};

var server = http.createServer(callback);
server.listen(port);
