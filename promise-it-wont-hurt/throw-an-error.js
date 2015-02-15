var q = require('q');

function parsePromised(toBeParsed) {
  var deferred = q.defer();
  try {
    var parsed = JSON.parse(toBeParsed);
    deferred.resolve(parsed);
  } catch (err) {
    deferred.reject(err);
  }
  return deferred.promise;
}

parsePromised(process.argv[2]).then(console.log).then(null, console.log);
