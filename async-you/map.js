var http = require('http');
var async = require('async');

async.map([process.argv[2], process.argv[3]], function (itm, cb) {
  http.get(itm, function (res) {
    var body = '';
    res.on('data', function (chunk) {
      body += chunk.toString();
    });
    res.on('end', function () {
      cb(null, body);
    });
  }).on('error', function (e) {
    cb(e);
  });
},
function (err, results) {
  if (err) {
    console.log(err);
    return ;
  }
  console.log(results);
});
