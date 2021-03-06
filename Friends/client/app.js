var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/logreg.html'
    })
    .when('/dash', {
        templateUrl: 'partials/dash.html'
    })
    .when('/friend/:id', {
        templateUrl: 'partials/show.html'
    })
    .otherwise({
        redirectTo: '/'
    })

})
