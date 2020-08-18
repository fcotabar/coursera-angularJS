(function() {
    'use strict';

    angular.module('admin')
        .config(routeConfig);


    /**
     * Configures the routes and views
     */
    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        // Routes
        $stateProvider
            .state('admin', {
                abstract: true,
                templateUrl: 'src/admin/admin.html'
            })
            .state('admin.registration', {
                url: '/sign-up',
                templateUrl: 'src/admin/registration/registration.html',
                controller: 'RegistrationController',
                controllerAs: 'reg'
            })
            .state('admin.userinfo', {
                url: '/user-info',
                templateUrl: 'src/admin/user-info/user-info.html',
                controller: 'UserInfoController',
                controllerAs: 'usr',
                resolve: {
                    userInfo: ['RegistrationService', function(RegistrationService) {
                        return RegistrationService.getUser();
                    }]
                }
            });
        // .state('public.menu', {
        //     url: '/menu',
        //     templateUrl: 'src/public/menu/menu.html',
        //     controller: 'MenuController',
        //     controllerAs: 'menuCtrl',
        //     resolve: {
        //         menuCategories: ['MenuService', function(MenuService) {
        //             return MenuService.getCategories();
        //         }]
        //     }
        // })
        // .state('public.menuitems', {
        //     url: '/menu/{category}',
        //     templateUrl: 'src/public/menu-items/menu-items.html',
        //     controller: 'MenuItemsController',
        //     controllerAs: 'menuItemsCtrl',
        //     resolve: {
        //         menuItems: ['$stateParams', 'MenuService', function($stateParams, MenuService) {
        //             return MenuService.getMenuItems($stateParams.category);
        //         }]
        //     }
        // });
    }
})();