var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
    var duplexer = require('duplexer');
    var exec = spawn(cmd, args);    

    return duplexer(exec.stdin, exec.stdout);
}

