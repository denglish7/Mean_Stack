var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/users', {
        templateUrl: 'partials/customizeUsers.html'
    })
    .when('/list', {
        templateUrl: 'partials/userList.html'
    })
    .otherwise({
        redirectTo: '/users'
    });
});
