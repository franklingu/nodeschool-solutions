// include the Lo-Dash library
var _ = require("lodash");

var worker = function(user) {
    var compiled = _.template('Hello ${ user.name } (logins: ${ user.login.length })');
    return compiled({user: user});
};

// export the worker function as a nodejs module
module.exports = worker;
