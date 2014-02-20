var concat = require('concat-stream');
var reverse = concat(function (buf) {
            var body = buf.toString().split('').reverse().join('');
            console.log(body);
        });

process.stdin.pipe(reverse).pipe(process.stdout);

