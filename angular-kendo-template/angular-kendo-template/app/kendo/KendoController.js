(function () {
    angular.module('app')
        .controller('KendoController', function ($scope) {
            $scope.schedulerOptions = {
                date: new Date(),
                views: ['day', 'week', 'month']
            }
        });
})();