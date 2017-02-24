app.controller('CustomizeUsersController', function($scope, userFactory){
    $scope.users = userFactory.users;
    $scope.oneUser = userFactory.oneUser;
    $scope.addUser = function(){
        userFactory.add($scope.newUser, function(){
            $scope.users = userFactory.users;
        })
        $scope.newUser = {};
    }
    $scope.removeUser = function(idx){
        userFactory.remove(idx, function(){
            $scope.users = userFactory.users;
        })
    }
    $scope.showOneUser = function(idx){
        userFactory.showOne(idx, function(){
            $scope.oneUser = userFactory.oneUser;
        })
    }
})
