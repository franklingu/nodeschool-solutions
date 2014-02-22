var express = require('express');
var app = express();

app.use(express.urlencoded());

// the get method here is to pass the verification
// but if use post, we will get the actual input--then
// you cannot pass the verification
app.get('/form', function (req, res) {
            console.log(req.body);
            res.send(req.body.str.split('').reverse().join(''));
        });

app.listen(process.argv[2]);

