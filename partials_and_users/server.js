var express = require('express');
var app = express();
var path = require('path');
// var bp = require('body-parser');

app.use(express.static(path.join(__dirname + '/client')));
app.use(express.static(path.join(__dirname + '/bower_components')));

app.listen(8000, function(){
    console.log('listening on 8000');
})
