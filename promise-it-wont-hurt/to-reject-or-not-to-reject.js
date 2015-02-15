var q = require('q');
var deferred = q.defer();

deferred.promise.then(console.log, console.log);

setTimeout(deferred.resolve, 300, 'I FIRED');
setTimeout(deferred.reject, 400, 'I DID NOT FIRE');
