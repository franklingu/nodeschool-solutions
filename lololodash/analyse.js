// include the Lo-Dash library
var _ = require("lodash");

var worker = function(freelancers) {
    var total = _.reduce(freelancers, function (sum, freelancer) {
        return sum + freelancer.income;
    }, 0);
    var average = total / freelancers.length;
    return {
        average: average,
        underperform: _.chain(freelancers).filter(function (freelancer) {
            return freelancer.income <= average;
        }).sortBy('income'),
        overperform: _.chain(freelancers).filter(function (freelancer) {
            return freelancer.income > average;
        }).sortBy('income')
    };
};

// export the worker function as a nodejs module
module.exports = worker;
