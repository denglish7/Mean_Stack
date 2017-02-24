var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
app.use(express.static(path.join(__dirname + 'static')));
app.use(bp.urlencoded());
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

app.post('/submit', function(req, res){
    res.render('results', {data: req.body})
})

app.listen(8000, function(){
    console.log('hey');
})
