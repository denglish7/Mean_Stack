app.controller('orderController', function($scope, customerFactory, productFactory){
    customerFactory.getAll(function(data){
        $scope.customers = data;
    })
    productFactory.getAll(function(data){
        $scope.products = data;
    })
    $scope.createOrder = function(){
        customerFactory.createOrder($scope.newOrder);
    }
    customerFactory.getOrders(function(data){
        $scope.orders = data;
    })
})
