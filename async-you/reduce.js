var http = require('http');
var async = require('async');
var url = process.argv[2];

async.reduce(['one', 'two', 'three'], 0, function (sum, itm, cb) {
  http.get(url + '?number=' + itm, function (res) {
    var body = '';
    res.on('data', function (chunk) {
      body += chunk.toString();
    });
    res.on('end', function () {
      cb(null, (sum + Number(body)));
    });
  }).on('error', function (err) {
    cb(err);
  });
},
function (err, result) {
  if (err) {
    console.log(err);
    return ;
  }
  console.log(result);
});
