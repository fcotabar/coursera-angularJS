(function() {
    'use strict';

    angular.module('Data')
        .controller('MenuCategoriesController', MenuCategoriesController);

    // MenuCategoriesController.$inject = ['MenuCategoriesService'];

    // function MenuCategoriesController(MenuCategoriesService) {
    MenuCategoriesController.$inject = ['categories'];

    function MenuCategoriesController(categories) {
        var menu = this;

        menu.categoriesItems = categories;


        // var promise = MenuCategoriesService.getAllCategories();

        // promise.then(function(response) {
        //         menu.categoriesItems = response.data;
        //         //console.log(menu.categories[0]);
        //     })
        //     .catch(function(erro) {
        //         console.log("Something went terribly wrong.");
        //     });

        // menu.logMenuItems = function(shortName) {
        //     var promise = MenuCategoriesService.getItemsForCategory(shortName);

        //     promise.then(function(response) {
        //             console.log(response.data.menu_items);
        //             menu.Items = response.data.menu_items;
        //         })
        //         .catch(function(error) {
        //             console.log(error);
        //         });

        // };
    }


})();