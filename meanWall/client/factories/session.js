app.factory('sessionFactory', function($http, $location){
    var factory = {};
    factory.login = function(user){
        $http.post('/login', user).then(function(output){
            if(output.data){
                $location.url('/dash')
            }
        })
    }
    factory.checkStatus = function(cb){
        $http.get('/checkstatus').then(function(output){
            if(output.data){
                cb(output.data)

                if($location.$$path == '/login'){
                    $location.url('/dash')
                }
            } else {
                $location.url('/login');
            }
        })
    }
    return factory;
})
