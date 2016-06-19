/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
(function () {
    'use strict';
    angular.module('MishWishApp.ApiService', ['ngResource']).factory('ApiService', ApiService).config(['$httpProvider', function ($httpProvider) {
            // To pass Api call's with credentials
            //$httpProvider.defaults.withCredentials = true;
        }]);
    // Dependency Injection
    ApiService.$inject = ['$http'];
    function ApiService($http) {
        // Declare all service.
        var theService = {
            GetUser: null,
            PutUser: null,
            GetContacts: null,
        };
        // To Do : Get from config file
        var ApiUrl = "http://localhost:49573/api/";
        // Get token from session for web-api authenticate..
        var accesstoken = sessionStorage.getItem('accessToken');
        if (accesstoken) {
            $http.defaults.headers.common.Authorization = accesstoken;
        }
        // Get service URL form js session storage.
        if (sessionStorage.getItem("apiURL")) {
            ApiUrl = sessionStorage.getItem("apiURL");
        }
        // Get current user contacts.
        theService.GetContacts = function () {
            return $http.get(ApiUrl + 'Contact/');
        };
        return theService;
    }
})();
//# sourceMappingURL=mish-wish-api-service.js.map