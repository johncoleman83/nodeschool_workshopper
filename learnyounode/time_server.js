/**
 * creating an HTTP server with Node.js
 */

var net = require('net');
var port = process.argv[2];
var http = require('http');

function fetchDate()
{
  var d = new Date();
  var dmon = d.getMonth() + 1;
  var dd = d.getDate();
  var dh = d.getHours();
  var dmin = d.getMinutes();

  dmon = dmon < 10 ? '-0' + dmon : '-' + dmon;
  dd = dd < 10 ? '-0' + dd : '-' + dd;
  dh = dh < 10 ? ' 0' + dh : ' ' + dh;
  dmin = dmin < 10 ? ':0' + dmin : ':' + dmin;

  var datetime = '' + d.getFullYear() + dmon + dd + dh + dmin + '\n';

  return datetime;
}

var server = net.createServer(
  function (socket)
  {
    socket.write(fetchDate());
    socket.end();
  });

server.listen(port);
