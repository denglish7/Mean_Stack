var mongoose = require('mongoose');
var Order = mongoose.model('Order')
var Product = mongoose.model('Product')

module.exports = (function(){
    return {
        create: function(req, res){
            Product.findOne({_id: req.body._product}, function(err, product){
                if(req.body.qty > product.qty){
                    res.json(null);
                } else {
                    product.qty -= req.body.qty;
                    var order = new Order(req.body);
                    order.save(function(err, data){
                        res.json(data);
                    })
                    if(product.qty == 0){
                        product.remove({_id: product._id})
                    }
                    product.save(function(err, data){
                        console.log(data);
                    })
                }
            })


        },
        getall: function(req, res){
            Order.find({})
            .populate('_customer')
            .populate('_product')
            .exec(function(err, orders){
                res.json(orders);
            })
        }
    }
})()
