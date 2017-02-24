var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/dash', {
        templateUrl: 'partials/dash.html'
    })
    .when('/new', {
        templateUrl: 'partials/new.html'
    })
    .when('/show/:id', {
        templateUrl: 'partials/show.html'
    })
    .when('/update/:id', {
        templateUrl: 'partials/update.html'
    })
    .otherwise({
        redirectTo: '/dash'
    })
})
