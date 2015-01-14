var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

// express 4.x does not have those middleware bundled by default already
app.post('/form', function (req, res) {
  console.log(req.body);
  res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);
