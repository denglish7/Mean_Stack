app.controller('userController', function($scope){
    $scope.welcome = 'Welcome!!!';
    $scope.foods = ['Pizza', 'BBQ', 'Fries', 'Salad', 'Steak'];
    $scope.addFood = function(){
        $scope.foods.push($scope.newFood);
        $scope.newFood = '';
    }
    $scope.Hi = false;
    $scope.showText = function(){
        $scope.Hi = true;
    }
    $scope.Hello = false;
    $scope.showHello = function(){
        $scope.Hello = true;
    }
})
