var duplexer = require('duplexer');

module.exports = function (counter) {
    var writable = require('stream').Duplex;

    duplexer(counter, writable);
    //counter.setCounts(5);
    return writable;
}

