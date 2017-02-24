var express = require('express'),
    app = express(),
    path = require('path'),
    bp = require('body-parser');
    mongoose = require('mongoose');

app.use(bp.urlencoded());
app.use(express.static(path.join(__dirname + '/static')));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
    created_at: String
})

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');
mongoose.Promise = global.Promise;

app.get('/', function(req, res){
    res.render('index');
})

app.get('/quotes', function(req, res){
    Quote.find({}, function(err, results){
        if(err) {console.log(err); }
        res.render('quotes', {quotes: results});
    })
})

app.post('/quotes', function(req, res){
    var quote = new Quote({name: req.body.name, quote: req.body.quote, created_at: new Date() });
    quote.save(function(err){
        if(err){
            res.redirect('/');
        } else {
            res.redirect('/quotes');
        }
    })
})


app.listen(8000, function(){
    console.log("listening on 8000");
})
