var express = require("express");
var app = express();
var path = require('path');
var bp = require('body-parser');


app.use(express.static(__dirname + "/static"));
app.use(bp.urlencoded({extended: true}));
app.set('views,', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index', {title: "my Express project"});
})

app.get('/user/:id', function(req, res){
    console.log("The user id requested is:", req.params.id);
    res.send("You requested the user with id: " + req.params.id);
});

app.post('/users/', function(req, res){
    console.log("POST DATA \n\n", req.body)
    res.redirect('/')
});





// app.get('/users', function(request, response){
//     var users_array = [
//         {name: "Michael", email: "michael@codingdojo.com"},
//         {name: "Jay", email: "jay@codingdojo.com"},
//         {name: "Brendan", email: "brendan@codingdojo.com"},
//         {name: "Andrew", email: "andrew@codingdojo.com"}
//     ];
//     response.render('users', {users: users_array});
// })
//
app.listen(8000, function(){
    console.log("listening on 8000");
})
