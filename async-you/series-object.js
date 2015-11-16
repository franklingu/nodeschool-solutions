var http = require('http');
var async = require('async');

function getHttpForCB (url, cb) {
  var body = '';
  http.get(url, function (res) {
    res.on('data', function (chunk) {
      body += chunk.toString();
    });
    res.on('end', function () {
      cb(null, body);
    });
  }).on('error', function (err) {
    cb(err);
  });
}

async.series({
  requestOne: function (cb) {
    var url = process.argv[2];
    getHttpForCB(url, cb);
  },
  requestTwo: function (cb) {
    var url = process.argv[3];
    getHttpForCB(url, cb);
  }
}, function (err, results) {
  if (err) {
    console.err(err);
    return ;
  }
  console.log(results);
});
