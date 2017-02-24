var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function(){
    return {
        add: function(req, res){
            Product.findOne({name: req.body.name}, function(err, product){
                if(err){
                    console.log(err);
                    res.json(err);
                } else {
                    if(!product){
                        var product = new Product(req.body);
                        product.save(function(err, data){
                            res.json(data);
                        })
                    } else {
                        res.json(null);
                    }
                }
            })
        },
        getall: function(req, res){
            Product.find({}, function(err, data){
                res.json(data);
            })
        },
    }
})()
