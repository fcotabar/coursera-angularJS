(function() {
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchList = "";
        $scope.lunchMsg = "";

        $scope.checkLunch = function() {
            if ($scope.lunchList == '') {
                console.log('Empty');
                $scope.lunchMsg = 'Please enter data first';
            } else {
                if (countLunchItems() < 4) $scope.lunchMsg = 'Enjoy!';
                else $scope.lunchMsg = 'Too much!';
            }
        };

        function countLunchItems() {
            var lunchItems = $scope.lunchList.split(',');
            var countItems = 0;

            console.log('Items: ' + lunchItems.length);
            for (var i = 0; i < lunchItems.length; i++) {
                if (lunchItems[i] != '') countItems++;
            }

            console.log(`Counted Items: ${countItems}`);

            return countItems;
        }

    }

})();