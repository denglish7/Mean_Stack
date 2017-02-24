var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    bday: String
})

mongoose.model('User', UserSchema);
