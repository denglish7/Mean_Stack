var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true},
    _friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

mongoose.model('User', UserSchema)
