
var app = angular.module('scrapperFront', ['ui.bootstrap']);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
        when("/" ,      { templateUrl: '/templates/home.html',   controller:'' }).
        when("/foo" ,   { templateUrl: '/templates/foo.html',    controller:'' }).
        otherwise({redirectTo:'/'});
}]);

function HeaderCtrl($scope, $location) {
    $scope.isActive = function(route) {
        return route == $location.path();
    }
};

function MainCtrl($scope, $routeParams, $http, $filter) {
}

