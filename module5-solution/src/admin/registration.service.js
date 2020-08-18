(function() {
    'use strict';

    angular.module('admin')
        .service('RegistrationService', RegistrationService);

    function RegistrationService() {
        var service = this;
        var user;

        service.registUser = function(regUser) {
            // console.log(regUser);
            // user.push(regUser);
            user = regUser;
            // console.log("user: ", user);
        };

        service.getUser = function() {
            return user;
        };
    }
})();