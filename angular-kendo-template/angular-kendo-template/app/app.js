(function () {
    angular.module('app', ['ngRoute', 'kendo.directives'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/app/home/home.html',
                    controller: "HomeController"
                })
                .when('/kendo', {
                    templateUrl: '/app/kendo/kendo.html',
                    controller: 'KendoController'
                })
                .otherwise({ redirectTo: '/' });
        }])

        .directive('banner', function () {
            return {
                restrict: 'E',
                templateUrl: '/app/partials/banner.html'
            }
        })


})();