app.controller('usersController', function($scope){
    $scope.users = [{ first_name: "Daniel", last_name: 'English', favorite_language: 'JS'}];
    $scope.addUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = '';
    }
    $scope.removeUser = function(idx){
        $scope.users.splice(idx, 1);
    }
})
