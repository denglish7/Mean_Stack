var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
    return{
        login: function(req, res){
            User.findOne({name: req.body.name}, function(err, data){
                if(!data){
                    var user = new User(req.body);
                    user.save(function(err, data){
                        req.session.user = data;
                        req.session.save()
                        res.json(data);
                    })
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
        },
        getall: function(req, res){
            User.find({})
            .populate('_friends')
            .populate({
                path: '_comments',
                model: 'Comment',
                populate: {
                    path: '_creator',
                    model: 'User'
                }
            })
            .exec(function(err, user){
                res.json(user);
            })
        },
        addFriend: function(req, res){
            User.findOne({_id: req.session.user._id}, function(err, user){
                user._friends.push(req.body.userid)
                user.save(function(err, data){
                    req.session.user = data;
                    res.json(data);
                })
            })
        },
        getFriends: function(req, res){
            User.findOne({_id: req.session.user._id})
            .populate('_friends')
            .exec(function(err, users){
                res.json(users);
            })
        },
        getNonFriends: function(req, res){
            var omit = req.session.user._friends;
            omit.push(req.session.user._id);
            User.find({_id: {$nin: omit}}, function(err, users){
                if(err){
                    res.json(err);
                } else {
                    res.json(users);
                }
            })
        },
        getUsersFriends: function(req,res){
            User.findOne({_id: req.params.id})
            .populate('_friends')
            .exec(function(err, user){
                res.json(user);
            })
        }
    }
})()
