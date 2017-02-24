var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');
module.exports = (function(){
    return{
        register: function(req, res){
            User.findOne({email: req.body.email}, function(err, data){
                if(!data){
                    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
                    var user = new User(req.body)
                    user.save(function(err, data){
                        if(err){
                            res.json(err)
                        }
                        res.json(data);
                    })
                } else {
                    res.json(data);
                }
            })
        },
        login: function(req, res){
            User.findOne({email: req.body.email}, function(err, data){
                if(!data || bcrypt.compareSync(req.body.password, data.password) == false){
                    res.json({errors:true, errors:['incorrect password']});
                    res.redirect('/');
                } else {
                    req.session.user = data;
                    req.session.save();
                    res.json(data);
                }
            })
        },
        checkStatus: function(req, res){
            if(req.session.user){
                res.json(req.session.user);
            } else {
                res.json(null);
            }
        },
        logout: function(req, res){
            req.session.destroy();
            res.redirect('/')
        }
    }
})()
