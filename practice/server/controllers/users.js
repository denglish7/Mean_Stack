var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
    return {
        index: function(req, res){
            User.find({}, function(err, data){
                res.json(data);
            })
        },
        create: function(req, res){
            User.findOne(req.params, function(err, data){
                if(!data){
                    var user = new User(req.params)
                    user.save(function(err){
                        res.redirect('/');
                    })
                } else {
                    res.send('already exists');
                }
            })
        }
        remove: function(req, res){
            User.remove({name: req.params.name }, function(err){
                res.redirect('/')
            })
        }
    }
})()
