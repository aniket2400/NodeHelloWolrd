var express = require('Express');
var app = express();

var Hello = require('./Hello.js');

app.use('/hello', Hello);


app.listen(4000);