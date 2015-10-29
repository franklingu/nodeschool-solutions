// include the Lo-Dash library
var _ = require("lodash");

var worker = function(cities) {
    return _.forEach(cities, function (val, key, col) {
      if (val.population >= 1) {
        val.size = 'big';
      } else if (val.population < 1 && val.population >= 0.5) {
        val.size = 'med';
      } else {
        val.size = 'small';
      }
    });
};

// export the worker function as a nodejs module
module.exports = worker;
