app.controller('productController', function($scope, productFactory){
    $scope.addProduct = function(){
        productFactory.addProduct($scope.newProduct);
    }
    productFactory.getAll(function(data){
        $scope.products = data;
    })
})
