/**
 * learning http client and http requests from 3 input URL's
 */

var http = require('http');
var allResponses = {};
var jobsFinished = 0;
var inputurl;

function printAll() {
  for (var i = 0; i < 3; i++) {
    inputurl = process.argv[2 + i].split(':')[2];
    console.log(allResponses[inputurl]);
  };
};

function callback(response) {

  response.setEncoding('utf8');

  var urldata = [];
  var url = (response.req._header.split('\n')[1]).split(':')[2].slice(0, -1);

  response.on('data', function (data) {
    urldata.push(data);
  });

  response.on('end', function () {
    allResponses[url] = urldata.join('');
    jobsFinished++;
    if (jobsFinished == 3) {
      printAll();
    };
  });
};

for (var j = 0; j < 3; j++) {
  http.get(process.argv[2 + j], callback);
};
