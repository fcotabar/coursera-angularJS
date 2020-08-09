(function() {
    'use strict';

    angular.module('ShoppingList')
        .controller('ItemDetailController', ItemDetailController);

    // 'item' is injected through state's resolve
    ItemDetailController.$inject = ['item'];

    function ItemDetailController(item) {
        var itemDetail = this;
        console.log(item);

        itemDetail.name = item.name;
        itemDetail.quantity = item.quantity;
        itemDetail.description = item.description;
    }
})();