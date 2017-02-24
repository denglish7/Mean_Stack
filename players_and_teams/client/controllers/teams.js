app.controller('teamController', function($scope, teamFactory){
    $scope.teams = teamFactory.teams;
    $scope.addTeam = function(){
        teamFactory.add($scope.newTeam, function(){
            $scope.teams = teamFactory.teams;
        })
        $scope.newTeam = {};
    }
    $scope.removeTeam = function(idx){
        teamFactory.remove(idx, function(){
            $scope.teams = teamFactory.teams;
        })
    }
})
