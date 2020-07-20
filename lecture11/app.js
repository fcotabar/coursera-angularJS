(function() {
    'use strict';

    angular.module('MsgApp', [])

    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];

    function MsgController($scope) {
        $scope.name = "Francisco";
        $scope.stateOfBeing = "hungry";

        $scope.sayMessage = function() {
            return $scope.name + " likes to eat a healthy snacks";
        };

        $scope.feedYaakov = function() {
            $scope.stateOfBeing = "fed";
        };

    }



})();