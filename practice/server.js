var express = require('express');
var app = express();
var path = require('path');
var bp = require('body-parser');
var port = 8000;

app.use(bp.urlencoded());
app.use(express.static(path.join(__dirname + '/client')));
app.set('views', path.join(__dirname + '/client'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function(){
    console.log('listening on 8000');
})
