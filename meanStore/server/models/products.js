var mongoose = require('mongoose');
var Schema = mongoose.Schema;

ProductSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    qty: {type: Number, required: true}
}, {timestamps: true})

mongoose.model('Product', ProductSchema);
