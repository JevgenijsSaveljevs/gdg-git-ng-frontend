var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/dist'));
app.listen(4300, function() { console.log('listening'); });