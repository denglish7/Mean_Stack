app.controller('customerController', function($scope, customerFactory){
    $scope.errors = [];
    $scope.addCustomer = function(){
        customerFactory.addCustomer($scope.newCustomer, function(){
            $scope.errors.push('Customer exists')
        })
    }
    customerFactory.getAll(function(data){
        $scope.customers = data;
    })
    $scope.removeCustomer = function(id){
        customerFactory.removeCustomer(id);
    }

})
