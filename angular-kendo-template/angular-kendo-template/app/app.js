(function () {
    angular.module('app', ['ngRoute', 'kendo.directives'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/app/home/home.html',
                    controller: "HomeController"
                })
                .when('/scheduler', {
                    templateUrl: '/app/scheduler/scheduler.html',
                    controller: 'SchedulerController'
                })
                .otherwise({ redirectTo: '/' });
        }]);


})();