(function() {
    'use strict';

    angular.module('admin')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['RegistrationService', 'MenuService'];

    function RegistrationController(RegistrationService, MenuService) {
        var reg = this;
        reg.dishValidation = true;

        // MenuService.getDishes("A1").then(function(response) {
        //     console.log("Dishes:  ", response);
        // });


        reg.submit = function() {

            MenuService.getDishes(reg.user.dish.toUpperCase()).then(function(response) {
                // console.log(response);

                if (response === undefined) {
                    reg.dishValidation = false;
                } else {
                    reg.dishValidation = true;
                    var user = {
                        name: reg.user.firstname,
                        lastName: reg.user.lastname,
                        email: reg.user.email,
                        phone: reg.user.phone,
                        dish: response
                    };
                    reg.completed = true;

                    console.log("Dish: ", user.dish);

                    RegistrationService.registUser(user);
                }
            });

        };
    }
})();