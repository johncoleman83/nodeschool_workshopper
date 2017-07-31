/**
 * learning http client and http requests
 */

var url = process.argv[2];
var http = require('http');

function callback(response) {

  response.setEncoding('utf8');

  var urldata = [];
  var status = response.statusCode;

  response.on('data', function (data) {
    urldata.push(data);
  });

  response.on('end', function () {
    urldata = urldata.join('');
    var l = urldata.length;
    console.log(l + '\n' + urldata);
  });
};

http.get(url, callback);
