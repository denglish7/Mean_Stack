var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var bp = require('body-parser');

app.use(bp.urlencoded());
app.use(express.static(path.join(__dirname + '/static')));
app.set('views', path.join(__dirname + './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/mongoose_dashboard');
var AnimalSchema = new mongoose.Schema({
    name: String,
    type: String
})

mongoose.model('Animal', AnimalSchema);
var Animal = mongoose.model('Animal');
mongoose.Promise = global.Promise;

app.get('/', function(req, res){
    Animal.find({}, function(err, results){
        if(err) {console.log(err); }
        res.render('index', {animals: results});
    })
})

app.get('/mongooses/new', function(req, res){
    res.render('new');
})

app.post('/mongooses', function(req, res){
    console.log("POST DATA", req.body);
    var animal = new Animal({name: req.body.name, type: req.body.type});
    animal.save(function(err){
        if(err){
            console.log("something went wrong");
            res.redirect('/mongooses/new');
        } else {
            console.log("successfully added an animal!");
            res.redirect('/');
        }
    })
})

app.get('/mongooses/:id', function(req, res){
    Animal.find({ _id: req.params.id }, function(err, response){
        if(err) {console.log(err); }
        res.render('show', {animal: response[0]});
    })
})


app.get('/mongooses/edit/:id', function(req, res){
    Animal.find({ _id: req.params.id }, function(err, response){
        if(err) {console.log(err); }
        res.render('edit', {animal: response[0]});
    })
    // res.render('edit');
})

app.post('/mongooses/:id', function(req, res){
    Animal.update({ _id: req.params.id }, req.body, function(err, result){
        if(err) {console.log(err); }
        res.redirect('/');
    })
})

app.get('/mongooses/destroy/:id', function(req, res){
    Animal.remove({_id: req.params.id }, function(err){
        if(err) {
            console.log(err)
        }
        res.redirect('/');
    })
})

app.listen(8000, function(){
    console.log("now listening on 8000");
})
