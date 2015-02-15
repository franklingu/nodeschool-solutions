var q = require('q');
var deferred = q.defer();

function attachTitle(name) {
  return 'DR. ' + name;
}

deferred.promise.then(attachTitle).then(console.log);

deferred.resolve('MANHATTAN');
