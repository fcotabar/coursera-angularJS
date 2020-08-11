(function() {
    'use strict';

    angular.module('Data')
        .component('itemsList', {
            templateUrl: 'src/menu/templates/itemslist.template.html',
            bindings: {
                items: '<'
            }
        });
})();