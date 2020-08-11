(function() {
    'use strict';

    angular.module('Data')
        .controller('MenuCategoriesController', MenuCategoriesController);

    MenuCategoriesController.$inject = ['items'];

    function MenuCategoriesController(items) {
        var menu = this;

        menu.categoriesItems = items;

        //     var promise = MenuCategoriesService.getAllCategories();

        //     promise.then(function(response) {
        //             menu.categoriesItems = response.data;
        //             //console.log(menu.categories[0]);
        //         })
        //         .catch(function(erro) {
        //             console.log("Something went terribly wrong.");
        //         });

        //     menu.logMenuItems = function(shortName) {
        //         var promise = MenuCategoriesService.getItemsForCategory(shortName);

        //         promise.then(function(response) {
        //                 console.log(response.data);
        //             })
        //             .catch(function(error) {
        //                 console.log(error);
        //             });

        //     };
    }


})();