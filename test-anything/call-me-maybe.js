var calb = require(process.argv[2]);
var tape = require('tape');

tape('should call cb with # of times', function (t) {
  var n = 5;
  t.plan(n);
  calb(n, function () {
    t.pass('cb called');
  });
});
