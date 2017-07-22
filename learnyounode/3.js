var fs = require('fs')
var file = process.argv[2];
var data = fs.readFileSync(file, 'utf8');
console.log((data.match(/\n/g) || []).length);
