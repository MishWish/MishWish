(function () {
    'use strict';
    angular.module('MishWishApp.LoginService', ['ngResource']).factory('LoginService', LoginService).config(['$httpProvider', function ($httpProvider) {
        }]);
    LoginService.$inject = ['$http'];
    function LoginService($http) {
        var ApiURL = "http://localhost:49763/api/";
        // Define all login service.
        var theService = {
            CreateUser: null,
            Login: null,
            LogOut: null,
            SetToken: null,
            GetToken: null,
        };
        // Get access token.
        theService.GetToken = function () {
            return sessionStorage.getItem('accessToken');
        };
        // Set access token
        theService.SetToken = function (tokenDetail) {
            sessionStorage.setItem('loginDetail', tokenDetail);
            // Build authorization token.
            sessionStorage.setItem('accessToken', 'bearer ' + tokenDetail.access_token);
        };
        // Create new user or register
        theService.CreateUser = function (userDetails) {
            return $http.post(ApiURL + 'Account/Register', userDetails);
        };
        // Login service.
        theService.Login = function (userDetails) {
            return $http({
                url: 'http://localhost:49573/token',
                method: 'POST',
                data: userDetails
            });
        };
        // Log out service.
        theService.LogOut = function () {
            sessionStorage.removeItem('accessToken');
            sessionStorage.removeItem('loginDetail');
        };
        return theService;
    }
})();
//# sourceMappingURL=mish-wish-login-service.js.map