(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
            url: '/',
            templateUrl: 'src/menu/templates/home.template.html'
        })

        // Premade list page
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/menu/templates/menu-categories.template.html',
            controller: 'MenuCategoriesController as menu',
            resolve: {
                categories: ['MenuCategoriesService',
                    function(MenuCategoriesService) {
                        return MenuCategoriesService.getAllCategories()
                            .then(function(items) {
                                console.log(items.data);
                                return items.data;
                            });
                    }
                ]
            }
        })

        // Item detail - as child of mainList
        .state('categories.menuItems', {
            url: '/menu-items/{shortName}',
            templateUrl: 'src/menu/templates/menu-items.template.html',
            controller: 'MenuItemsController as menu',
            resolve: {
                items: ['$stateParams', 'MenuCategoriesService',
                    function($stateParams, MenuCategoriesService) {
                        return MenuCategoriesService.getItemsForCategory($stateParams.shortName)
                            .then(function(items) {
                                //console.log(items.data.menu_items);
                                return items.data.menu_items;
                            });
                    }
                ]
            }
        });
    }

})();