(function() {
    'use strict';

    angular.module('DigestCycleApp', [])
        .controller('DigestCycleController', DigestCycleController);

    DigestCycleController.$inject = ['$scope'];

    function DigestCycleController($scope) {
        $scope.onceCounter = 0;
        $scope.counter = 0;

        $scope.showNumberOfWatchers = function() {
            console.log("# of Watchers: " + $scope.$$watchersCount);
        };

        $scope.countOnce = function() {
            $scope.onceCounter = 1;
        };

        $scope.upCounter = function() {
            $scope.counter++;
        };

        $scope.$watch(function() {
            console.log('Digest Loop Fired!');
        });

        /*      $scope.$watch('onceCounter', function(newValue, oldValue) {
                    console.log("Old value: ", oldValue);
                    console.log("New value: ", newValue);
                });

                $scope.$watch('counter', function(newValue, oldValue) {
                    console.log("Counter Old value: ", oldValue);
                    console.log("Counter New value: ", newValue);
                });
         */
    }
})();