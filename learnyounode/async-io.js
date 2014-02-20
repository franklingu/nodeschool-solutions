var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function(err, data){
    if (err) {
        throw err;
    } else {
        console.log(data.split('\n').length -1);
    }
});

