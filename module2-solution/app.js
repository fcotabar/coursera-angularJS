(function() {
    'use strict';

    angular.module('ShoppingListApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffSerivce) {
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffSerivce.getToBuyItems();

        //toBuyList.length = toBuyList.items.length;
        //console.log(toBuyList.length);


        toBuyList.checkItem = function(itemIndex) {
            ShoppingListCheckOffSerivce.checkItem(itemIndex);
        };

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffSerivce) {
        var alreadyBoughtList = this;

        alreadyBoughtList.items = ShoppingListCheckOffSerivce.getAlreadyBoughtItems();

        //alreadyBoughtList.length
    }



    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [{
                name: "Cookies",
                quantity: 10
            },
            {
                name: "Chips",
                quantity: 15
            },
            {
                name: "Cokes",
                quantity: 20
            },
            {
                name: "Milk",
                quantity: 10
            },
            {
                name: "Bread",
                quantity: 8
            }
        ];

        var alreadyBoughtItems = [];

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };

        service.checkItem = function(itemIndex) {
            var checkedItem = toBuyItems.splice(itemIndex, 1);
            alreadyBoughtItems.push(checkedItem[0]);
            /* console.log("CheckedItem: ", checkedItem[0]);
            console.log("alreadyBoughtItems: ", alreadyBoughtItems); */

        }
    }


})();