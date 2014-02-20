var through = require('through');
var split = require('split');
var count = 0;

process.stdin.pipe(split()).pipe(through(function (line){
            if (count%2==0) {
                this.queue((line + '\n').toString().toLowerCase());
            } else {
                this.queue((line + '\n').toString().toUpperCase());
            }
            count++;
        })).pipe(process.stdout);

