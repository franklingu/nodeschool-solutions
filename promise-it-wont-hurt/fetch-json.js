var qHttp = require('q-io/http');

qHttp.read('http://localhost:1337')
  .then(function (result) {
    var parsed = JSON.parse(result);
    console.log(parsed);
  })
  .then(null, console.error)
  .done();
