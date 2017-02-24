app.factory('productFactory', function(){
    var factory = {};
    factory.products = [{name: 'Keyboard', price: 149.99, qty: 50}];
    factory.add = function(newProduct, cb){
        newProduct.qty = 50;
        factory.products.push(newProduct);
        cb();
    }
    factory.remove = function(idx, cb){
        factory.products.splice(idx, 1);
        cb();
    }
    factory.buy = function(idx, cb){
        console.log('hi');
        factory.products[idx].qty -= 1;
        cb();
    }
    return factory;
})
