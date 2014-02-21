var concat = require('concat-stream');
var reverse = concat(function (buf) {
        var body = buf.toString().split('').reverse().join('');
        console.log(body);
    });

// concat buffer is write-only buffer, so it takes the input
// and then after processing, we console.log it.
process.stdin.pipe(reverse);

