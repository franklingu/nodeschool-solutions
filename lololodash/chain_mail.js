// include the Lo-Dash library
var _ = require("lodash");

var worker = function(arr) {
  return _.chain(arr).map(function (arg) {
    return arg + 'chained';
  }).map(function (arg) {
    return arg.toUpperCase();
  }).sortBy();
};

// export the worker function as a nodejs module
module.exports = worker;
