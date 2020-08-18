(function() {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'ApiPath'];

    function MenuService($http, ApiPath) {
        var service = this;

        service.getCategories = function() {
            return $http.get(ApiPath + '/categories.json').then(function(response) {
                return response.data;
            });
        };


        service.getMenuItems = function(category) {
            var config = {};
            if (category) {
                config.params = { 'category': category };
            }

            return $http.get(ApiPath + '/menu_items.json', config).then(function(response) {
                return response.data;
            });
        };

        service.getDishes = function(dish) {
            return $http.get(ApiPath + '/menu_items.json').then(function(response) {
                var menuItems = response.data.menu_items;
                var foundedDish;

                for (var i = 0; i < menuItems.length; i++) {
                    // console.log("From service - menu_items: ", menuItems);
                    if (menuItems[i].short_name === dish) {
                        foundedDish = menuItems[i];
                        break;
                    }
                }
                // return response.data;
                return foundedDish;
            });
        };
    }



})();