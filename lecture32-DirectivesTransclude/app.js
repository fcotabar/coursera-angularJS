(function() {
    'use strict';

    angular.module('ShoppingListDirectiveApp', [])
        .controller('ShoppingListController', ShoppingListController)
        .factory('ShoppingListFactory', ShoppingListFactory)
        .directive('shoppingList', ShoppingListDirective);

    function ShoppingListDirective() {
        var ddo = {
            templateUrl: 'shoppingList.html',
            scope: {
                items: "<",
                myTitle: '@title',
                onRemove: '&'
            },
            //controller: 'ShoppingListDirectiveController as list',
            controller: ShoppingListDirectiveController,
            controllerAs: 'list',
            bindToController: true,
            link: ShoppingListDirectiveLink,
            transclude: true
        };

        return ddo;
    }

    function ShoppingListDirectiveLink(scope, element, attrs, controller) {
        console.log("Link scope is: ", scope);
        console.log("Controller instance is: ", controller);
        console.log("Element is: ", element);

        scope.$watch('list.cookiesInList()', function(newValue, oldValue) {
            console.log("Old value: ", oldValue);
            console.log("New value: ", newValue);

            if (newValue === true) {
                displayCookieWarning();
            } else {
                removeCookieWarning();
            }
        });

        function displayCookieWarning() {
            // Using Angular jqLite
            // var warningElem = element.find("div");
            // console.log(warningElem);
            // warningElem.css('display', 'block');

            // If jQuery included before Angular
            var warningElem = element.find('div.error');
            warningElem.slideDown(900);

        }

        function removeCookieWarning() {
            // Using Angular jqLite
            // var warningElem = element.find("div");
            // warningElem.css('display', 'none');

            // If jQuery included before Angular
            var warningElem = element.find('div.error');
            warningElem.slideUp(900);
        }

    }


    function ShoppingListDirectiveController() {
        var list = this;

        list.cookiesInList = function() {
            for (var i = 0; i < list.items.length; i++) {
                var name = list.items[i].name;
                if (name.toLowerCase().indexOf('cookies') !== -1) {
                    return true;
                }
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

        list.warning = "COOKIES DETECTED";

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
            console.log("'this' is: ", this);
            this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
            ShoppingList.removeItem(itemIndex);
            list.title = origTitle + " (" + list.items.length + " items)";
        };

    }

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