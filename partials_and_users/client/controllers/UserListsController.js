app.controller('UserListsController', function($scope, userFactory){
    $scope.users = userFactory.users;
})
