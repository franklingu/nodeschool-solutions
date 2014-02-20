var http = require('http');

http.get(process.argv[2], function(rep){
    rep.on('data', function(data){
        console.log(data.toString());
    });
});

