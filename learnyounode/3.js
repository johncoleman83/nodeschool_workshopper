fs = require('fs')
var file = process.argv[2];
var data = fs.readFileSync(file).toString();
console.log(data);
