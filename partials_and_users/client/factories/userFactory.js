app.factory('userFactory', function(){
    var factory = {};
    factory.users = [{first_name: 'Daniel', last_name: 'English', fav_language: 'JavaScript'}];
    factory.oneUser = [];
    factory.add = function(newUser, callback){
        factory.users.push(newUser);
        callback();
    }
    factory.remove = function(idx, callback){
        factory.users.splice(idx, 1);
        callback();
    }
    return factory;
})
