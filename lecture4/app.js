(function() {
    'use strict';

    angular.module('myFirstApp', [])

    .controller('MyFirstController', function($scope) {
        $scope.name = "Francisco";
        $scope.sayHello = function() {
            return "Hello Coursera!";
        }
    });

})();