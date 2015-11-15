var fancify = require(process.argv[2]);
var tape = require('tape');

tape('fancify should wrap string with (~*~)', function (t) {
  t.equal(fancify(''), '~*~~*~', 'should wrap empty');
  t.equal(fancify('hello'), '~*~hello~*~', 'should wrap hello');
  t.equal(fancify('hello~*~'), '~*~hello~*~~*~', 'should wrap hello~*~');
  t.end();
});

tape('fancify should wrap string with (~*~) and covert to uppercase', function (t) {
  t.equal(fancify('hello', true), '~*~HELLO~*~', 'should wrap hello');
  t.equal(fancify('hello~*~', true), '~*~HELLO~*~~*~', 'should wrap hello~*~');
  t.end();
});

tape('fancify should wrap string with (~*~) with customization of middle char', function (t) {
  t.equal(fancify('hello', false, '$'), '~$~hello~$~', 'should wrap hello');
  t.equal(fancify('hello~*~', false, "$"), '~$~hello~*~~$~', 'should wrap hello~*~');
  t.end();
});
