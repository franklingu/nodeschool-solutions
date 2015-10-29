// include the Lo-Dash library
var _ = require("lodash");

var worker = function(items) {
    return _.sortBy(items, function (n) {
      return 0 - n.quantity;
    });
};

// export the worker function as a nodejs module
module.exports = worker;
