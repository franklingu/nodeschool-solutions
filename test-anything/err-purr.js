var feedCat = require(process.argv[2]);
var tape = require('tape');

tape('feedCat but not with choco', function (t) {
  t.plan(4);
  t.equal(feedCat('a'), 'yum');
  t.equal(feedCat('abc'), 'yum');
  t.equal(feedCat('fish'), 'yum');
  t.throws(feedCat.bind(null, 'chocolate'), Error);
});
