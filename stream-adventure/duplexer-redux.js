var duplexer = require('duplexer');

module.exports = function (counter) {
    var through = require('through');
    var counts = {};
    var processing = through(write, end);

    return duplexer(processing, counter);

    function write(buf) {
        // if the key does not exist yet
        //     0 + 1
        // if the key exists in counts already
        //     origin value + 1
        counts[buf.country] = (counts[buf.country] || 0) + 1;
    }
    function end() {
        counter.setCounts(counts);
    }
}

