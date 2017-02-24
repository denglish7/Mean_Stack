app.controller('userController', function($scope){
    $scope.cats = ['larry', 'tom', 'garfield', 'grumpy'];
    $scope.add = function(){
        $scope.cats.push($scope.newCat)
        $scope.newCat='';
    }
    $scope.delete = function(idx){
        $scope.cats.splice(idx, 1);
    }
})
