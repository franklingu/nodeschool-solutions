var http = require('http');
var strArray = ['','',''];
var done = [false, false, false];

function httpGet(index){
    http.get(process.argv[2+index], function(res){
        res.on('data', function(data){strArray[index] = strArray[index] + data.toString()});
        res.on('end', function(){
            done[index] = true;
            printStrings();
        });
    });
}

function printStrings(){
    if (done[0] && done[1] && done[2]){
        for (var i=0; i<3; i++) {
            console.log(strArray[i]);
        }
    }
}

for (var i=0; i<3; i++) {
    httpGet(i);
}

