(function() {
    'use strict';

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListController', ShoppingListController)
        .provider('ShoppingListService', ShoppingListServiceProvider)
        .config(Config);

    // Provider name + Provider key
    Config.$inject = ['ShoppingListServiceProvider'];

    function Config(ShoppingListServiceProvider) {
        ShoppingListServiceProvider.defaults.maxItems = 2;
    }

    ShoppingListController.$inject = ['ShoppingListService'];

    function ShoppingListController(ShoppingListService) {
        var list = this;

        list.itemName = "";
        list.itemQuantity = "";

        list.items = ShoppingListService.getItems();

        list.addItem = function() {
            try {
                ShoppingListService.addItem(list.itemName, list.itemQuantity);
            } catch (error) {
                list.errorMessage = error.message;
            }
        };

        list.removeItem = function($index) {
            ShoppingListService.removeItem($index);
            list.errorMessage = "";
        };
    }


    // If not specified, maxItems assumed unlimited
    function ShoppingListService(maxItems) {
        var service = this;

        var items = [];

        service.addItem = function(itemName, quantity) {
            if ((maxItems === undefined) ||
                (maxItems !== undefined) && (items.length < maxItems)) {
                var item = {
                    name: itemName,
                    quantity: quantity
                };
                items.push(item);
            } else {
                throw new Error("Max items (" + maxItems + ") reached.");
            }
        };

        service.removeItem = function(itemIndex) {
            items.splice(itemIndex, 1);
        };

        service.getItems = function() {
            return items;
        };
    }

    function ShoppingListServiceProvider() {
        var provider = this;

        provider.defaults = {
            maxItems: 10
        };

        provider.$get = function() {
            var shoppingList = new ShoppingListService(provider.defaults.maxItems);

            return shoppingList;
        };
    }
})();