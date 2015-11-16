var http = require('http');
var async = require('async');
var url = process.argv[2];

var count = 0;
var notContains = true;
async.whilst(
function () {
  return notContains;
},
function (cb) {
  http.get(url, function (res) {
    var body = '';
    res.on('data', function (chunk) {
      body += chunk.toString();
    });
    res.on('end', function () {
      notContains = body.indexOf('meerkat') == -1;
      count++;
      cb();
    });
  }).on('error', function (err) {
    notContains = true;
    count++;
    cb(err);
  });
},
function (err) {
  if (err) {
    console.log(err);
    return ;
  }
  console.log(count);
});
