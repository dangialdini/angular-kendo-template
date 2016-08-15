(function () {
    angular.module('app')
        .controller('SchedulerController', function ($scope) {
            $scope.schedulerOptions = {
                date: new Date(),
                views: ['day', 'week', 'month']
            }
        });
})();