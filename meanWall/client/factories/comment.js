app.factory('commentFactory', function($http, $route){
    var factory = {};
    factory.addComment = function(comment){
        $http.post('/comment/add', comment).then(function(output){
            $route.reload();
        })
    }
    return factory;
})
