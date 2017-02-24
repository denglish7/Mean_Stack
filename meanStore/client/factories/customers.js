app.factory('customerFactory', function($http, $route){
    factory = {};
    factory.addCustomer = function(customer, cb){
        $http.post('/customers/add', customer).then(function(output){
            if(output.data){
                $route.reload();
            } else {
                cb();
            }

        })
    }
    factory.getAll = function(cb){
        $http.get('/customers/getall').then(function(output){
            cb(output.data);
        })
    }
    factory.removeCustomer = function(id){
        $http.get('/customers/remove/' + id).then(function(){
            $route.reload();
        })
    }
    factory.createOrder = function(order){
        $http.post('/orders/new', order).then(function(output){
            $route.reload();
        })
    }
    factory.getOrders = function(cb){
        $http.get('/orders/getall').then(function(output){
            cb(output.data)
        })
    }
    return factory;
})
