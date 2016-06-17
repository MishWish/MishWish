
declare var ApiURL: string;
(function () {
    'use strict';
    angular.module('MishWishApp.LoginService', ['ngResource']).factory('LoginService', LoginService).config(['$httpProvider', function ($httpProvider) {
      
    }]);


    LoginService.$inject = ['$http'];

    function LoginService($http) {

       var ApiURL = "http://localhost:49573/api/";

        // Define all login service.
        var theService = {

            CreateUser    : null,
            Login         : null,
            LogOut        : null,
            SetToken      : null,
            GetToken      : null,
        };

        // Get access token.
        theService.GetToken = function () {
            sessionStorage.getItem('accessToken');
        }

        // Set access token
        theService.SetToken = function (tokenDetail) {
            sessionStorage.setItem('accessToken', tokenDetail.accessToken);
        }

        // Create new user or register
        theService.CreateUser = function (userDetails) {
            return $http.post(ApiURL + 'Account/Register', userDetails);
        }

        // Login service.
        theService.Login = function (userDetails) {
            return $http.post("http://localhost:49573/Token", userDetails, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
        }

        // Log out service.
        theService.LogOut = function () {
            sessionStorage.removeItem('accessToken');
        }



        return theService;
    }


})();