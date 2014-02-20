var through = require('through');
var tr = through(write, end);
                        
function write (buf) { this.queue(buf.toString().toUpperCase()); }
function end () { this.queue(null); }

process.stdin.pipe(tr).pipe(process.stdout);

