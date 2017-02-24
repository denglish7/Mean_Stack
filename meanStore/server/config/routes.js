var customer = require('./../controllers/customers.js')
var product = require('./../controllers/products.js')
var order = require('./../controllers/orders.js')

module.exports = function(app){
    app.post('/customers/add', function(req, res){
        customer.add(req, res)
    })
    app.get('/customers/getall', function(req, res){
        customer.getall(req, res)
    })
    app.get('/customers/remove/:id', function(req, res){
        customer.remove(req, res);
    })
    //****************************************************
    app.post('/products/add', function(req, res){
        product.add(req, res)
    })
    app.get('/products/getall', function(req, res){
        product.getall(req, res)
    })
    //****************************************************
    app.post('/orders/new', function(req, res){
        order.create(req, res);
    })
    app.get('/orders/getall', function(req, res){
        order.getall(req, res);
    })
}
