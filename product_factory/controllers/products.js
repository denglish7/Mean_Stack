app.controller('productController', function($scope, productFactory){
    $scope.products = productFactory.products;
    $scope.addProduct = function(){
        productFactory.add($scope.newProduct, function(){
            $scope.products = productFactory.products;
        });
        $scope.newProduct = {};
    }
    $scope.removeProduct = function(idx){
        productFactory.remove(idx, function(){
            $scope.products = productFactory.products;
        });
    }
})
