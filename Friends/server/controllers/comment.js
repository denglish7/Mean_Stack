var mongoose = require('mongoose');
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');

module.exports = (function(){
    return{
        addComment: function(req, res){
            var comment = new Comment(req.body)
            comment._creator = req.session.user._id;
            console.log(comment)
            comment.save(function(err, data){
                User.findOne({_id: req.body._user}, function(err, user){
                    user._comments.push(data.id);
                    user.save(function(err, userData){
                        res.json(data);
                        // console.log(data)
                    })
                })
            })
        },
        getComments: function(req, res){
            Comment.find({})
            .populate('_creator')
            .exec(function(err, comment){
                res.json(comment);
            })
        }
    }
})()
