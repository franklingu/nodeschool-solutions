var express =  require('express');
var app = express();

// another bug or something. but this is definitely the right answer

// someone suggest that reinstalling node&npm without sudo will make the
// solution pass, I guess personally I will pass this option.
app.use(express.static(process.argv[3]));
app.use(require('stylus').middleware(process.argv[3]));

app.listen(process.argv[2]);

