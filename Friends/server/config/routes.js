var comment = require('./../controllers/comment.js');
var user = require('./../controllers/session.js');


module.exports = function(app){
    app.post('/login', function(req, res){
        user.login(req, res);
    })
    app.get('/checkstatus', function(req, res){
        user.checkStatus(req, res)
    })
    app.get('/logout', function(req, res){
        user.logout(req, res);
    })
    app.get('/users/getUsers', function(req, res){
        user.getall(req, res);
    })
    app.post('/friend/add', function(req, res){
        user.addFriend(req, res);
    })
    app.get('/friends/getFriends', function(req, res){
        user.getFriends(req, res);
    })
    app.get('/friends/nonfriends', function(req, res){
        user.getNonFriends(req, res);
    })
    app.get('/friend/:id', function(req, res){
        user.getUsersFriends(req, res);
    })
    app.post('/comment/add', function(req, res){
        comment.addComment(req, res);
    })
    app.get('/comment/getall', function(req, res){
        comment.getComments(req, res);
    })
}
