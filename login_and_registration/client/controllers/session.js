app.controller('sessionController', function($scope, sessionFactory){
    sessionFactory.checkStatus(function(data){
        $scope.curUser = data
    })
    $scope.register = function(){
        if(!$scope.reg || !$scope.reg.first_name || !$scope.reg.last_name || !$scope.reg.email || !$scope.reg.password || !$scope.reg.confirm_password || !$scope.reg.bday){
            alert('all fields are required')
        } else if($scope.reg.password != $scope.reg.confirm_password) {
            alert('password and confirm password fields must match')
        } else {
            sessionFactory.register($scope.reg)
        }

    }
    $scope.login = function(){
        if(!$scope.log || !$scope.log.email || !$scope.log.password){
            alert('all fields required')
        } else {
            sessionFactory.login($scope.log)
        }
    }
})
