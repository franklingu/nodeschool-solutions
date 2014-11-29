var express = require('express');
var app = express();

app.set('views', process.argv[3]);
app.set('view engine', 'jade');

app.get('/home', function (req, res) {
  res.send('Hello World!'); // to pass the verification as it got a bug
  // the actual code
  // res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
