var mongoose = require('mongoose')
var People = mongoose.model('People');

module.exports = (function(){
    return{
        create: function(req, res){
            People.findOne({ name: req.params.name }, function(err, data){
                if(!data){
                    var person = new People({name: req.params.name})
                    person.save(function(err){
                        if(err){
                            console.log('something went wrong')
                        } else {
                            console.log('successfully added');
                        }
                    })
                }
            })
        },
        index: function(req, res){
            People.find({}, function(err, data){
                if(err){
                    console.log('error')
                }
                res.json(data);
            })
        },
        delete: function(req, res){
            People.remove({name: req.params.name}, function(err){
                if(err){
                    console.log(err);
                }
            })
        },
        showOne: function(req, res){
            People.findOne({ name: req.params.name }, function(err, data){
                if(err){
                    console.log(err);
                }
                res.json(data);
            })
        }
    }
})()
