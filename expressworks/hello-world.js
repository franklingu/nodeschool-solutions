var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/home', function (req, res) {
  res.send('Hello World!');
})

app.listen(Number(process.argv[2]));
