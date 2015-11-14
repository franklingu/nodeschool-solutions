// include the Lo-Dash library
var _ = require("lodash");

var worker = function(comments) {
    var vals = [];
    var grouped = _.groupBy(comments, function (comment) {
        return comment.username;
    });
    _.forEach(grouped, function (comments, username) {
        vals.push({username: username, comment_count: _.size(comments)});
    });
    return _.sortBy(vals, function (v) {
        return 0 - v.comment_count;
    });
};

// export the worker function as a nodejs module
module.exports = worker;
