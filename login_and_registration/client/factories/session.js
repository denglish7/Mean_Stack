app.factory('sessionFactory', function($http, $location, $route){
    var factory = {};
    factory.register = function(user){
        $http.post('/register', user).then(function(output){
            if(output.data){
                $route.reload();
            }
        })
    }
    factory.login = function(user){
        $http.post('/login', user).then(function(output){
            if(output.data){
                $location.url('/dash')
            }
        })
    }
    factory.checkStatus = function(cb){
        $http.get('/checkstatus').then(function(output){
            if(!output.data){
                $location.url('/');
            } else {
                cb(output.data)
            }
        })
    }
    return factory;
})
