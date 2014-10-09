var express = require('express');
var app = express();

var PORT = 3000;

app.use(express.static(__dirname + '/app'));

app.listen(process.env.PORT || 3000);
console.log('Start server at http://localhost:%d', PORT);