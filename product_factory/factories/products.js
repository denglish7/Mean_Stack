app.factory('productFactory', function(){
    var factory = {};
    factory.products = [{name: 'Keyboard', price: 149.99}];
    factory.add = function(newProduct, cb){
        factory.products.push(newProduct);
        cb();
    }
    factory.remove = function(idx, cb){
        factory.products.splice(idx, 1);
        cb();
    }
    return factory;
})
