/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />


(function () {
    'use strict';

    angular.module('MishWishApp.ApiService', ['ngResource']).factory('ApiService', ApiService).config(['$httpProvider', function ($httpProvider) {

        // To pass Api call's with credentials
        $httpProvider.defaults.withCredentials = true;

    }]);

    // Dependency Injection
    ApiService.$inject = ['$http'];
    function ApiService($http) {

        // Declare all service.
        var theService = {
            PostUser: null,
            GetUser: null,
            PutUser: null,
        };


        var ApiUrl = "locahost:";

        // Get service URL form js session storage.
        if (sessionStorage.getItem("apiURL")) {
            ApiUrl = sessionStorage.getItem("apiURL");
        }

        // Get current user
        theService.PostUser = function (userDto) {
            return $http.post(ApiUrl + 'User/', userDto);
        };

        return theService;
    }
})();