(function() {
    'use strict';

    angular.module('common', [])
        .constant('ApiPath', 'https://davids-restaurant.herokuapp.com')
        .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        // $httpProver will have an array of LoadingHttpInterceptor
        $httpProvider.interceptors.push('LoadingHttpInterceptor');
    }

})();