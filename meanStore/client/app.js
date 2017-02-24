var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/dash.html'
    })
    .when('/products', {
        templateUrl: 'partials/products.html'
    })
    .when('/orders', {
        templateUrl: 'partials/orders.html'
    })
    .when('/customers', {
        templateUrl: 'partials/customers.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})
