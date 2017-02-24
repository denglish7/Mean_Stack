var people = require('./../controllers/people.js')

module.exports = function(app){
    app.get('/', function(req, res){
        people.index(req, res);
    })
    app.get('/new/:name/', function(req, res){
        people.create(req, res);
        res.redirect('/')
    })
    app.get('/remove/:name/', function(req, res){
        people.delete(req, res);
        res.redirect('/')
    })
    app.get('/:name', function(req, res){
        people.showOne(req, res);
    })
}
