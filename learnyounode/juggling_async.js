/**
 * learning http client and http requests from 3 input URL's
 */

var http = require('http');
var allResponses = [];
var jobsFinished = 0;

function printAll() {
  for (var i = 0; i < 3; i++) {
    console.log(allResponses[i]);
  };
};

function callback(response) {

  response.setEncoding('utf8');

  var urldata = [];

  response.on('data', function (data) {
    urldata.push(data);
  });

  response.on('end', function () {
    allResponses.push(urldata.join(''));
    jobsFinished++;
    if (jobsFinished == 3) {
      printAll();
    };
  });

};

for (var j = 0; j < 3; j++) {
  http.get(process.argv[2 + j], callback);
};
