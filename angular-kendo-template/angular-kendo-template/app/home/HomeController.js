(function () {
    angular.module('app')
        .controller('HomeController', function ($scope) {
            $scope.homePage = {
                heading: 'AngularJS + KendoUI = Awesome',
                description: 'The is a small template to help you get an Angular project, with KendoUI, up and running quickly!',
                descriptionAngular: 'This project includes AngularCore 1.4.8 and is setup with Angular-Route',
                descriptionKendo: 'Also included is KendoUI v2016.2.607, using kendos Silver theme and Bootstrap 3.3.6'
            }

        });
})();