app.controller('associationsController', function($scope, teamFactory, playerFactory){
    $scope.associations = [{name: "Daniel", team_name:"Seahawks"}]
    $scope.players = playerFactory.players;
    $scope.teams = teamFactory.teams;
    $scope.assignPlayer = function(){
        playerFactory.addPlayerToTeam($scope.newA);
    }
})
