app.controller('orderController', function($scope, productFactory){
    $scope.products = productFactory.products;
    $scope.buy = function(idx){
        productFactory.buy(idx, function(){
            $scope.products = productFactory.products;
        })
    }
})
