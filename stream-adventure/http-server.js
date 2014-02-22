var http = require('http');
var through = require('through');
var server = http.createServer(function (req, res) {
            // if the request.method is POSt
            if (req.method == 'POST') {
                // pipe the data out of request and perform toUpperCase
                // then from the writable stream created by through
                // to response
                req.pipe(through(function (buf) {
                            this.queue(buf.toString().toUpperCase());
                        })).pipe(res);
                // end the connection or the connection will hang up 
                // unexpectedly
                res.end();
            } else {
                // directly end
                res.end();
            }
        });

server.listen(process.argv[2]);

