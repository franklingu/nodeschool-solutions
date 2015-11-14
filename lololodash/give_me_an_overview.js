// include the Lo-Dash library
var _ = require("lodash");

var worker = function(orders) {
    var grouped = _.groupBy(orders, function (order) {
        return order.article;
    });
    var acc = [];
    _.forEach(grouped, function (allOrders, name) {
        acc.push({article: parseInt(name), total_orders: _.reduce(allOrders, function (sum, order) {
            return sum + order.quantity;
        }, 0)});
    });
    return _.sortBy(acc, 'total_orders').reverse();
};

// export the worker function as a nodejs module
module.exports = worker;
