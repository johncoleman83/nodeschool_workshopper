var fs = require('fs');
var directory = process.argv[2];
var extension = process.argv[3];
fs.readdir(directory, 'utf8', function (err, files) {
  if (err) {
    console.log(err);
  } else {
    printTextFiles(files);
  }
});

function printTextFiles(files) {
  var s;
  for (i = 0, l = files.length; i < l; i++) {
    s = files[i];
    if (s.includes('.') && (s.split('.').pop() == extension)) {
      console.log(s);
    };
  };
};
