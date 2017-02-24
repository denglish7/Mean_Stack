app.factory('playerFactory', function(){
    var factory = {};
    factory.players = [{name: "Daniel", team: "Seahawks"}];
    factory.add = function(newPlayer){
        newPlayer.team = "";
        factory.players.push(newPlayer);
    }
    factory.remove = function(idx, callback){
        factory.players.splice(idx, 1);
    }
    factory.addPlayerToTeam = function(data){
        console.log('hi');
        factory.players[data.playerIdx].team = data.team;
    }
    return factory;
})
