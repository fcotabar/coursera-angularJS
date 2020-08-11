(function() {
    'use strict';

    angular.module('Data')
        .component('categoriesList', {
            templateUrl: 'src/menu/templates/categorieslist.template.html',
            bindings: {
                items: '<'
            }
        });
})();