var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new Schema({
    first_name: {type: String, required: true, minlength: 3},
    last_name: {type: String, required: true, minlength: 3},
    email: {type: String, required: true, minlength: 3},
    password: {type: String, required: true, minlength: 8},
    bday: {type: String, required: true}
})

mongoose.model('User', UserSchema)
