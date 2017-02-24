var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/a', {
        templateUrl: 'partials/a.html'
    })
    .otherwise({
        redirectTo:'/a';
    })
})
