// include the Lo-Dash library
var _ = require("lodash");

var worker = function(towns) {
    var col = {hot: [], warm: []};
    var isHot, isWarm;
    _.forEach(towns, function (val, key) {
      isHot = _.every(val, function (n) {
        return n > 19;
      });
      isWarm = _.some(val, function (n) {
        return n > 19;
      });
      if (isHot) {
        col.hot.push(key);
      }
      if (!isHot && isWarm) {
        col.warm.push(key);
      }
    });
    return col;
};

// export the worker function as a nodejs module
module.exports = worker;
