/**
 * creating an HTTP server with Node.js
 */

var net = require('net');
var port = process.argv[2];
var http = require('http');

var server = net.createServer(function (socket) {
  socket.write('Hello');
});
server.listen(port);
