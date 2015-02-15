var q = require('q');
var deferred1 = q.defer();
var deferred2 = q.defer();
var prom1 = deferred1.promise;
var prom2 = deferred2.promise;

/*
function all(promise1, promise2) {
  return q.all([promise1, promise2]);
}*/

function all(promise1, promise2) {
  var allDeferred = q.defer();
  var counter = 0;
  var vals = [];
  promise1
    .then(function (result) {
      vals[0] = result;
      counter++;
      if (counter >= 2) {
        allDeferred.resolve(vals);
      }
    })
    .then(null, allDeferred.reject)
    .done();
  promise2
    .then(function (result) {
      vals[1] = result;
      counter++;
      if (counter >= 2) {
        allDeferred.resolve(vals);
      }
    })
    .then(null, allDeferred.reject)
    .done();
  return allDeferred.promise;
}

all(prom1, prom2).then(console.log);

setTimeout(deferred1.resolve, 200, 'PROMISES');
setTimeout(deferred2.resolve, 200, 'FTW');
