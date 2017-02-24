// var mongoose = require('mongoose');
// var User = mongoose.model('User');

var user = require('./../controllers/users.js')

module.exports = function(app){
    app.get('/', function(req, res){
        user.index(req, res)
    })
    app.get('/')
}
