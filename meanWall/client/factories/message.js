app.factory('messageFactory', function($http, $route){
    var factory = {};
    factory.messages = [];
    factory.addMessage = function(message, cb){
        $http.post('/messages/add', message).then(function(output){
            factory.messages.push(output.data)
            cb(output.data);
            $route.reload();
        })
    }
    factory.getAll = function(cb){
        $http.get('/messages/getall').then(function(output){
            cb(output.data)
        })
    }
    return factory;
})
