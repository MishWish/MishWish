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
            PostUser: null,
            GetUser: null,
            PutUser: null,
            GetContacts:null,
        };


        var ApiUrl = "http://localhost:49573/api/";

        var accesstoken = sessionStorage.getItem('accessToken');

       // var authHeaders = { Authorization: null };

        if (accesstoken) {
            //authHeaders.Authorization = accesstoken;

            $http.defaults.headers.common.Authorization = accesstoken;
        }

        // Get service URL form js session storage.
        if (sessionStorage.getItem("apiURL")) {
            ApiUrl = sessionStorage.getItem("apiURL");
        }

        // Create new user.
        theService.PostUser = function (userDto) {
            return $http.post(ApiUrl + 'User/', userDto);
        };

        // Get current user contacts.
        theService.GetContacts = function () {
            return $http.get(ApiUrl + 'Contact/');
        }

        return theService;
    }
})();