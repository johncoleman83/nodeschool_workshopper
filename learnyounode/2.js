var args = process.argv;
var sum = 0;
for (len = args.length, i = 2; i < len; ++i) {
  sum += parseInt(args[i], 10);
};

console.log(sum);
