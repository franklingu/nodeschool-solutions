var http = require('http'), fs = require('fs');
var async = require('async');
var filePath = process.argv[2];

async.waterfall([
  function (cb) {
    fs.readFile(filePath, function (err, content) {
      if (err) {
        cb(err);
        return ;
      }
      cb(null, content.toString());
    });
  },
  function (content, cb) {
    var body = '';
    http.get(content, function (res) {
      res.on('data', function (chunk) {
        body += chunk.toString();
      });
      res.on('end', function () {
        cb(null, body);
      });
    }).on('error', function (err) {
      cb(err);
    });;
  }
  ], function (err, result) {
  if (err) {
    console.err(err);
    return ;
  }
  console.log(result);
});
