/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />
var loginCtrl = angular.module('MishWishApp.Login', ['ngResource']);
var Login;
(function (Login) {
    'use strict';
    var LoginCtrl = (function () {
        function LoginCtrl($scope, $state, LoginService) {
            var loginScope = this;
            var mishWishScope = $scope.mishWishScope;
            // Declare login VM.
            loginScope.LoginVM = new UserClass.LoginVM({
                UserName: null,
                Password: null,
            });
            // Login into mish wish system.
            loginScope.LogIn = function (loginDetail) {
                var loginConent = "grant_type=password&username=" + loginDetail.UserName + "&password=" + loginDetail.Password;
                // Login to system.
                LoginService.Login(loginConent)
                    .success(function (data, status, headers, config) {
                    if (data != null) {
                        // Set access token.
                        LoginService.SetToken(data);
                        // Get access token from session.
                        var getAccessToken = LoginService.GetToken();
                        if (getAccessToken != null) {
                            $state.go('MishWishHome.Recharge');
                            mishWishScope.IsLoginSuccess = true;
                            mishWishScope.IsSignUp = false;
                        }
                        else {
                            // Go default state i.e login page.
                            $state.go('^');
                            mishWishScope.IsLoginSuccess = false;
                            mishWishScope.IsSignUp = false;
                        }
                    }
                })
                    .error(function (data, status, headers, config) {
                });
            };
            // Log out from mish wish system.
            loginScope.LogOut = function () {
            };
        }
        LoginCtrl.$inject = ['$scope', '$state', 'LoginService'];
        return LoginCtrl;
    }());
    loginCtrl.controller('LoginCtrl', LoginCtrl);
})(Login || (Login = {}));
//# sourceMappingURL=login.js.map