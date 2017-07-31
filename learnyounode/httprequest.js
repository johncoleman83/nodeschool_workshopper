/**
 * learning http client and http requests
 */

var url = process.argv[2];
var http = require('http');

http.get(url, function (response) {

  var str = '';
  var urldata = []

  response.setEncoding('utf8')

  response.on('data', function (data) {
    urldata.push(data);
  });

  response.on('end', function () {
    console.log(urldata.join('\n'));

  });
});
