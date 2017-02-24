app.factory('userFactory', function($http, $location, $route){
    var factory = {};
    factory.getAll = function(cb){
        $http.get('/users/getall').then(function(output){
            cb(output.data);
        })
    }
    factory.add = function(user){
        $http.post('/users/add', user).then(function(output){
            $location.url('/dash')
        })
    }
    factory.delete = function(id){
        $http.get('/users/delete/' + id).then(function(){
            $route.reload()
        })
    }
    factory.show = function(id){
        $location.url('/show/' + id)
    }
    factory.update = function(id){
        $location.url('/update/' + id)
    }
    factory.change = function(user){
        $http.post('/users/change', user).then(function(){
            $location.url('/')
        })
    }
    return factory;
})
