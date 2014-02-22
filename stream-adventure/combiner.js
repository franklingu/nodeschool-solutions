var combiner = require('stream-combiner');
var through = require('through');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {
    var grouper = through(write, end);
    var current;

    function write(buf) {
        // no input case
        if (buf.length == 0) return ;
        var row = JSON.parse(buf);

        if (row.type === 'genre') {
            if (current) {
                // put the previous result to the stream
                this.queue(JSON.stringify(current) + '\n');
            }
            current = {name: row.name, books: []};
        } else if (row.type === 'book') {
            current.books.push(row.name);
        }
    }

    function end() {
        if (current) {
            // put the last record to stream
            this.queue(JSON.stringify(current) + '\n');
        }
        this.queue(null);  // end the stream
    }

    return combiner(split(), grouper, zlib.createGzip());
}

