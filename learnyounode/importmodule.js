/**
 * imports module and calls the module with input arguments
 */
var module6 = require('./module6.js')
var directory = process.argv[2];
var extension = process.argv[3];
var callback = process.argv[4];
module6(directory, extension, callback);
