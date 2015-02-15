var qHttp = require('q-io/http');

qHttp.read('http://localhost:7000')
  .then(function (result) {
    // toString can be omitted and JavaScript will do conversion to string for you
    var id = result.toString();
    // here a new promise will be returned
    return qHttp.read('http://localhost:7001/' + id);
  }, console.error)  // the error handler here is not really usefull. anyway
                     // just one error handler at the end of all is okay
  .then(function (res) {  // this is attached to the promise reading port 7001
    console.log(JSON.parse(res.toString()));
  }, console.error)
  .done();
