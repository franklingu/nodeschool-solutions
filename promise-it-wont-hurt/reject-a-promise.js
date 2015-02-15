var q = require('q');
var deferred = q.defer();

deferred.promise.then(console.log, function (err) {
  console.log(err.message);
});

setTimeout(deferred.reject, 300, new Error('REJECTED!'));
