var user = require('./../controllers/users.js')


module.exports = function(app){
    app.post('/users/add', function(req, res){
        user.add(req, res)
    })
    app.get('/users/getall', function(req, res){
        user.getAll(req, res);
    })
    app.get('/users/delete/:id', function(req, res){
        user.delete(req, res)
    })
    app.post('/users/change', function(req, res){
        user.change(req, res)
    })
}
