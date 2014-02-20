var fs = require('fs');

function readDir(dirName, ext, callback){
    fs.readdir(dirName, function(err, list){
        if (err){
	    callback(err);
	}else{
            var matchList = [];
	    for (var i=0; i<list.length; i++){
	        if (list[i].split('.')[1] == ext){
		    matchList.push(list[i]);
		}
	    }
            callback(null, matchList);
	}
    });
}

module.exports = readDir;

