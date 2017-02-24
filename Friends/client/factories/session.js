app.factory('sessionFactory', function($http, $location, $route){
    var factory = {};
    factory.login = function(user){
        $http.post('/login', user).then(function(output){
            if(output.data){
                $location.url('/dash');
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
    factory.getUsers = function(cb){
        $http.get('/users/getUsers').then(function(output){
            cb(output.data);
        })
    }
    factory.addFriend = function(newFriend){
        $http.post('/friend/add', newFriend).then(function(output){
            $route.reload();
        })
    }
    factory.getFriends = function(cb){
        $http.get('/friends/getFriends').then(function(output){
            cb(output.data);

        })
    }
    factory.getNonFriends = function(cb){
        $http.get('/friends/nonfriends').then(function(output){
            cb(output.data);
        })
    }
    factory.show = function(id){
        $http.get('/friend/' + id).then(function(output){
            $location.url('/friend/' + id);
        })

    }
    return factory;
})
