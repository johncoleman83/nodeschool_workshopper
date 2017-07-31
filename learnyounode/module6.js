/**
 * module with function that prints all files with same extension as the input
 * extension inside the input directory, and then calls the input function
 */
var fs = require('fs');

module.exports = function (directory, extension, func) {

  fs.readdir(directory, 'utf8', function (err, files) {
    if (err) {
      return func(err);
    } else {
      newfiles = printTextFiles(files);
    }
    func(null, newfiles);
  });

  function printTextFiles(files) {

    var s;
    var newfiles = [];
    for (i = 0, l = files.length; i < l; i++) {

      s = files[i];
      if (extension.includes('.')) {
	extension = extension.substr(1);
      };
      if (s.includes('.') && (s.split('.').pop() == extension)) {
	newfiles.push(s);
	console.log(s);
      };
    };

    return newfiles;

  };
};
