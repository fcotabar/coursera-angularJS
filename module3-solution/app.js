(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                menu: '<myItems',
                onRemove: '&'
            }
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var menu = this;

        menu.searchTerm = "";

        menu.found = "";

        //menu.nothingFound = true;


        menu.narrowItems = function() {
            MenuSearchService.getMatchedMenuItems(menu.searchTerm);
            menu.found = MenuSearchService.foundItems;

            //menu.nothingFound = true;

            if (menu.searchTerm == false) {
                console.log("Nothing found.");
                menu.nothingFound = false;
            } else menu.nothingFound = true;

            menu.nothingFoundF();

        };

        menu.removeItem = function(indexItem) {
            MenuSearchService.removeItem(indexItem);
        };

        menu.nothingFoundF = function() {
            if (menu.nothingFound == false) return false;
            else return MenuSearchService.foundItemsStatus;
        };

        //menu.foundItemsStatus = MenuSearchService.foundItemsStatus;
    }


    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        var promise = getMenuItems();

        function getMenuItems() {
            var response = $http({
                method: 'GET',
                url: (ApiBasePath + "/menu_items.json")
            });
            return response;
        }

        service.getMatchedMenuItems = function(searchTerm) {
            service.foundItems = [];
            service.foundItemsStatus = false;

            promise.then(function(response) {
                    //console.log(response.data.menu_items);
                    service.nothingFound = false;


                    if (searchTerm != false) {
                        var menuItems = response.data.menu_items;
                        for (var i = 0; i < menuItems.length; i++) {
                            if (menuItems[i].description.indexOf(searchTerm.toLowerCase()) !== -1) {
                                var item = {
                                    name: menuItems[i].name,
                                    short_name: menuItems[i].short_name,
                                    description: menuItems[i].description

                                };
                                service.foundItems.push(item);
                                service.setFoundItemsStatus(true);
                            }
                        }
                        //console.log(menu.found);

                        if (service.foundItems.length === 0) {
                            service.nothingFoundMsg = "Nothing found";
                            service.setFoundItemsStatus(false);
                            console.log("Nothing found 2");
                        }
                        // else console.log(service.foundItems);
                    }
                    //return service.foundItems;
                    //return service.nothingFoundMsg;


                })
                .catch(function(error) {
                    console.log("Something went wrong", error);
                });
        };

        service.removeItem = function(indexItem) {
            service.foundItems.splice(indexItem, 1);
        };

        service.setFoundItemsStatus = function(status) {
            service.foundItemsStatus = status;
            return status;
        };


    }



})();