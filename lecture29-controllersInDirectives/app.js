(function() {
    'use strict';

    angular.module('ShoppingListDirectiveApp', [])
        .controller('ShoppingListController', ShoppingListController)
        .factory('ShoppingListFactory', ShoppingListFactory)
        //.controller('ShoppingListDirectiveController', ShoppingListDirectiveController)
        .directive('shoppingList', ShoppingListDirective);

    function ShoppingListDirective() {
        var ddo = {
            templateUrl: 'shoppingList.html',
            scope: {
                items: "<",
                title: '@'
            },
            //controller: 'ShoppingListDirectiveController as list',
            controller: ShoppingListDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function ShoppingListDirectiveController() {
        var list = this;

        list.cookiesInList = function() {
            for (var i = 0; i < list.items.length; i++) {
                var name = list.items[i].name;
                if (name.toLowerCase().indexOf('cookie') !== -1) return true;
            }
            return false;
        };
    }

    ShoppingListController.$inject = ['ShoppingListFactory'];

    function ShoppingListController(ShoppingListFactory) {
        var list = this;

        var ShoppingList = ShoppingListFactory();
        list.items = ShoppingList.getItems();

        var origTitle = "Shopping List #1";
        list.title = origTitle + " (" + list.items.length + " items)";

        list.itemName = "";
        list.itemQuantity = "";


        list.addItem = function() {
            try {
                ShoppingList.addItem(list.itemName, list.itemQuantity);
                list.title = origTitle + " (" + list.items.length + " items)";
            } catch (error) {
                list.errorMessage = error.message;
            }
        };

        list.removeItem = function(itemIndex) {
            ShoppingList.removeItem(itemIndex);
            list.title = origTitle + " (" + list.items.length + " items)";
        };

    }

    // ShoppingListController2.$inject = ['ShoppingListFactory'];

    // function ShoppingListController2(ShoppingListFactory) {
    //     var list = this;

    //     list.maxItems = 3;

    //     var ShoppingList = ShoppingListFactory(list.maxItems);

    //     list.itemName = "";
    //     list.itemQuantity = "";

    //     list.items = ShoppingList.getItems();

    //     list.addItem = function() {
    //         try {
    //             ShoppingList.addItem(list.itemName, list.itemQuantity);
    //         } catch (error) {
    //             list.errorMessage = error.message;
    //         }
    //     };

    //     list.removeItem = function(itemIndex) {
    //         ShoppingList.removeItem(itemIndex);
    //         list.errorMessage = "";
    //     };

    // }

    function ShoppingListService(maxItems) {
        var service = this;

        var items = [];

        service.getItems = function() {
            return items;
        };

        service.addItem = function(name, quantity) {
            if ((maxItems === undefined) ||
                (maxItems !== undefined) && (items.length < maxItems)) {
                var item = {
                    name: name,
                    quantity: quantity
                };
                items.push(item);
            } else {
                throw new Error("Max items (" + maxItems + ") reached!");
            }
        };

        service.removeItem = function(itemIndex) {
            items.splice(itemIndex, 1);
        };
    }



    function ShoppingListFactory() {
        var factory = function(maxItems) {
            return new ShoppingListService(maxItems);
        };
        return factory;
    }
})();