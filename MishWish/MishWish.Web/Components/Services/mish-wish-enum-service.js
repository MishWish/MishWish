/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
angular.module('MishWishApp.EnumsService', ['ngResource'])
    .factory('EnumsService', ['$resource', function ($resource) {
        var allEnums = {};
        return allEnums;
    }]);
//# sourceMappingURL=mish-wish-enum-service.js.map