app.factory('commentFactory', function($http, $route){
    var factory = {};
    factory.addComment = function(comment){
        $http.post('/comment/add', comment).then(function(output){
            $route.reload();
        })
    }
    factory.getComments = function(cb){
        $http.get('/comment/getall').then(function(output){
            cb(output.data);
        })
    }
    return factory;
})
