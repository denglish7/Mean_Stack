var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + '/static')));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

var server = app.listen(8000, function(){
    console.log('listening on 8000');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log('WE ARE USING SOCKETS!');
    console.log(socket.id);

    socket.on("message_sent", function (data){
        io.emit('submitted_message', {response: data})
        socket.emit('server_response', {response: "sockets are the best!"});
    })
})
