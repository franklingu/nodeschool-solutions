var http = require('http');
var async = require('async');
var hostname = process.argv[2]
  , port = process.argv[3]
  , url = 'http://' +  hostname + ':' + port;


async.series({
  post: function (next) {
    async.times(5, function (n, cb) {
      var postData = JSON.stringify({
        'user_id' : n + 1
      });

      var options = {
        hostname: hostname,
        port: port,
        path: '/users/create',
        method: 'POST',
        headers: {
          'Content-Length': postData.length
        }
      };

      var req = http.request(options, function(res) {
        res.on('data', function (chunk) {
          console.log('BODY: ' + chunk);
        });
        res.on('end', function() {
          cb(null, postData);
        })
      });

      req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
        cb(err);
      });

      req.write(postData);
      req.end();
    },
    function (err, results) {
      if (err) {
        next(err);
        return ;
      }
      next(null, results);
    });
  },
  get: function (next) {
    var req = http.get(url, function(res) {
      var body = '';
      res.on('data', function (chunk) {
        body += chunk.toString();
      });
      res.on('end', function() {
        next(null, body);
      })
    });

    req.on('error', function(e) {
      next(err);
    });
  }
},
function (err, results) {
  if (err) {
    console.log(err);
    return ;
  }
  console.log(results.get);
});


