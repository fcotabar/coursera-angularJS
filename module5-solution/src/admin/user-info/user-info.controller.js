(function() {
    'use strict';

    angular.module('admin')
        .controller('UserInfoController', UserInfoController);

    UserInfoController.$inject = ['userInfo'];

    function UserInfoController(userInfo) {
        var usr = this;

        if (userInfo === undefined) {
            usr.registred = false;
        } else {
            usr.registred = true;
            usr.info = userInfo;
            usr.info.dishCat = userInfo.dish.short_name.replace(/\d+/g, '');
            //console.log("Category: ", usr.info.dishCat);
        }



        console.log(userInfo);
    }
})();