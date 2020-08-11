(function() {
    'use strict';

    angular.module('Data')
        .service('MenuCategoriesService', MenuCategoriesService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


    MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];

    function MenuCategoriesService($http, ApiBasePath) {
        var service = this;



        service.getAllCategories = function() {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            });
            return response;
        };

        service.getItemsForCategory = function(shortName) {
            var response2 = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: shortName
                }
            });
            return response2;
        };

    }
})();