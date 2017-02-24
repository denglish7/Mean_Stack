var express = require('express');
    app = express();
    path = require('path');
    bp = require('body-parser');
    mongoose = require('mongoose');

app.use(bp.urlencoded());
app.use(express.static(path.join(__dirname + '/client/static')));
app.set('views', path.join(__dirname + '/client/views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board')

var MessageSchema = new mongoose.Schema({
    name: String,
    message: String
})

var CommentSchema = new mongoose.Schema({
    name: String,
    comment: String
})

var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4},
    text: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });


var commentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4},
    _message: { type: Schema.Types.ObjectId, ref: 'Post' },
    text: { type: String, required: true },
}, { timestamps: true });

mongoose.model('Message', messageSchema);
mongoose.model('Comment', commentSchema);

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

mongoose.Promise = global.Promise;

app.get('/', function(req, res){
    Message.find({}, false, true).populate('comments').exec(function(err, messages){
    res.render('index', {messages: messages, errors: null });
    })
})

app.post('/message', function(req, res){
    var message = new Message({name: req.body.name, text: req.body.message })
    message.save(function(err){
        if(err){
            console.log(err);
            res.render('index', {title: 'You have errors!', errors: message.errors});
        } else {
            console.log('success');
            res.redirect('/');
        }
    })
})


app.post('/comment/:id', function(req, res){
    Message.findOne({_id: req.params.id}, function(err, message){
        var comment = new Comment({name: req.body.name, text: req.body.text});
        comment._message = message._id;
        comment.save(function(err){
            message.comments.push(comment);
            message.save(function(err){
                if(err) {
                    res.render('index', {title: 'You have errors!', Cerrors: comment.errors})
                    console.log('Error');
                } else {
                    console.log('success');
                    res.redirect('/');
                }
            })
        })
    })
})



app.listen(8000, function(){
    console.log('listening on 8000');
})
