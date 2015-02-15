var qHttp = require('q-io/http');
var _ = require('lodash');
var idPath = 'http://localhost:7000';
var userPath = 'http://localhost:7001/';
var buildUserPath = _.bind(String.prototype.concat, userPath);

qHttp.read(idPath)
  .then(_.flow(buildUserPath, qHttp.read))
  .then(_.flow(JSON.parse, console.log))
  .then(null, console.error)
  .done();
// check out lodash api docs. flowRight can also be used here
