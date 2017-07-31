/**
 * reads file and prints number of newlines asynchronous filesystem
 */
var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    printLineCount(data);
  }
});

function printLineCount(data) {
  console.log((data.match(/\n/g) || []).length);
};
