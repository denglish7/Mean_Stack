var mongoose = require('mongoose');
var Schema = mongoose.Schema;

OrderSchema = new Schema({
    _customer: { type: Schema.Types.ObjectId, ref: 'Customer'},
    _product: { type: Schema.Types.ObjectId, ref: 'Product'},
    qty: {type: Number }
}, {timestamps: true})

mongoose.model('Order', OrderSchema);
