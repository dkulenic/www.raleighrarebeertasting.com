'use strict';

var beersApp = angular.module('beersApp', [
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
}])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'IndexCtrl'
    });
}])
.controller('IndexCtrl', ['$scope', 'myService', function ($scope, myService) {
    // This array holds the beers.
    $scope.beersArr = [];
    $scope.lol = "omg";

    // Function to return all beers to the scope so that
    // we can print out the list.
    $scope.getAllBeers = function() {
        myService.getAllBeers().then(function(d) {
            // The array of beers starts out empty.
            $scope.beersArr = d.data;
        });
    };
}]);

beersApp.factory('myService', ['$http', function($http) {
    var myService = {
        getAllBeers: function() {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get('/data/beers.json').then(function (response) {
                return response;
            });

            // Return the promise to the controller.
            return promise;
        },
    };

    return myService;
}]);
