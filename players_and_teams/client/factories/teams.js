app.factory('teamFactory', function(){
    var factory = {};
    factory.teams = [{team_name: 'Seahawks'}];
    factory.add = function(newTeam, callback){
        factory.teams.push(newTeam);
        callback();
    }
    factory.remove = function(idx, callback){
        factory.teams.splice(idx, 1);
    }
    return factory;
})
