var isCoolNumber = require(process.argv[2]);
var assert = require('assert');

assert.ok(isCoolNumber(42), '42 is a cool number');
