(function() {
    'use strict';

    angular.module('Data')
        .controller('MenuItemsController', MenuItemsController);

    // MenuItemsController.$inject = ['MenuCategoriesService'];

    // function MenuItemsController(MenuCategoriesService) {
    MenuItemsController.$inject = ['$stateParams', 'items', 'categories'];

    function MenuItemsController($stateParams, items, categories) {
        var menu = this;

        var shortName = $stateParams.shortName;
        // console.log(categories);

        for (var i = 0; i < categories.length; i++) {
            // console.log(categories[i].short_name);
            // console.log(shortName);

            if (shortName == categories[i].short_name) {
                menu.categoryName = categories[i].name;
                console.log(categories);
                break;
            }
        }

        menu.items = items;

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