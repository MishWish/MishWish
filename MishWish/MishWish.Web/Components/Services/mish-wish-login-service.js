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
            sessionStorage.getItem('accessToken');
        };
        // Set access token
        theService.SetToken = function (tokenDetail) {
            sessionStorage.setItem('accessToken', tokenDetail.accessToken);
        };
        // Create new user or register
        theService.CreateUser = function (userDetails) {
            return $http.post(ApiURL + 'Account/Register', userDetails);
        };
        // Login service.
        theService.Login = function (userlogin) {
            debugger;
            return $http({
                url: "/TOKEN",
                method: "POST",
                data: $.param({ grant_type: 'password', username: userlogin.username, password: userlogin.password }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            });
        };
        // Log out service.
        theService.LogOut = function () {
        };
        return theService;
    }
})();
//# sourceMappingURL=mish-wish-login-service.js.map