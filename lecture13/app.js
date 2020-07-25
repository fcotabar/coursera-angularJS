(function() {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController)
        .filter('love', LovesFilter);

    //Injects $scope and $filter
    MsgController.$inject = ['$scope', '$filter', 'loveFilter'];

    function MsgController($scope, $filter, loveFilter) {
        $scope.name = "Francisco";
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost = 0.45;

        $scope.sayMessage = function() {
            var msg = $scope.name + " likes to eat a healthy snacks";

            // Returning a filtered value to uppercase
            return $filter('uppercase')(msg);
        };

        $scope.sayLovesMessage = function() {
            var msg = $scope.name + " likes to eat a healthy snacks";
            msg = loveFilter(msg);
            // Returning a filtered value to uppercase
            return msg;
        };


        $scope.feedYaakov = function() {
            $scope.stateOfBeing = "fed";
        };

    }

    function LovesFilter() {
        return function(input) {
            input = input || '';
            input = input.replace('likes', 'loves');
            return input;
        };
    }



})();