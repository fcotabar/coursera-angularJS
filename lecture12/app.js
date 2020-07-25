(function() {
    'use strict';

    angular.module('MsgApp', [])

    .controller('MsgController', MsgController);

    //Injects $scope and $filter
    MsgController.$inject = ['$scope', '$filter'];

    function MsgController($scope, $filter) {
        $scope.name = "Francisco";
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost = 0.45;

        $scope.sayMessage = function() {
            var msg = $scope.name + " likes to eat a healthy snacks";

            // Returning a filtered value to uppercase
            return $filter('uppercase')(msg);
        };

        $scope.feedYaakov = function() {
            $scope.stateOfBeing = "fed";
        };

    }



})();