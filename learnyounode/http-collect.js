var http = require('http');
var str = '';

http.get(process.argv[2], function (res) {
  res.on('data', function (data) {
    str = str + data.toString();
  });
  res.on('end', function () {
    console.log(str.length);
    console.log(str);
  });
});
