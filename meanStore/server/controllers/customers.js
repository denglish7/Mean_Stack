var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
    return {
        add: function(req, res){
            Customer.findOne({name: req.body.name}, function(err, customer){
                if(err){
                    console.log(err);
                    res.json(err);
                } else {
                    if(!customer){
                        var customer = new Customer(req.body);
                        customer.save(function(err, data){
                            res.json(data);
                        })
                    } else {
                        res.json(null);
                    }
                }
            })
        },
        getall: function(req, res){
            Customer.find({}, function(err, data){
                res.json(data);
            })
        },
        remove: function(req, res){
            console.log(req.params.id)
            Customer.remove({_id: req.params.id}, function(err, data){
                res.json({status: true})
            })
        }
    }
})()
