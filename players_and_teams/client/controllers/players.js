app.controller('playerController', function($scope, playerFactory){
    $scope.players = playerFactory.players;
    $scope.addPlayer = function(){
        playerFactory.add($scope.newPlayer)
        $scope.newPlayer = {};
    }
    $scope.removePlayer = function(idx){
        playerFactory.remove(idx, function(){
            $scope.players = playerFactory.players;
        })
    }
})
