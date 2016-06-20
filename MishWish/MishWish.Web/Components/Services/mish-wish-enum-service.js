/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
angular.module('MishWishApp.EnumsService', ['ngResource'])
    .factory('EnumsService', ['$resource', function ($resource) {
        var allEnums = {
            MishWishState: { Contact: "MishWishHome.Contact", Recharge: "MishWishHome.Recharge", Dth: "MishWishHome.DTH", DataCard: "MishWishHome.DataCard" },
            MishWishStateList: ["MishWishHome.Contact", "MishWishHome.Recharge", "MishWishHome.DTH", "MishWishHome.DataCard"],
            MishWishUserRegistrationState: { UserRegistration: "MishWishHome.UserRegistration" }
        };
        return allEnums;
    }]);
//# sourceMappingURL=mish-wish-enum-service.js.map