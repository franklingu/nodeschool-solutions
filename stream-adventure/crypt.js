var crypto = require('crypto');
var decipher = crypto.createDecipher('aes256', process.argv[2]);

process.stdin.pipe(decipher).pipe(process.stdout);

