app.factory('productFactory', function($http, $route){
    factory = {};
    factory.addProduct = function(product){
        $http.post('/products/add', product).then(function(output){
            $route.reload();
        })
    }
    factory.getAll = function(cb){
        $http.get('/products/getall').then(function(output){
            cb(output.data);
        })
    }
    return factory;
})
