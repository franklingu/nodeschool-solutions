var trumpet = require('trumpet');
var through = require('through');

// create a trumpet stream object
var tr = trumpet();
// select element of the class of 'loud' and create a stream out of it
var stream = tr.select('.loud').createStream();
// transfer function
var upper = through(function (buf) {
    this.queue(buf.toString().toUpperCase());
  });

// piping content in stream to transfer function, and then pipe result back
stream.pipe(upper).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);
