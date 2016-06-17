/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />
var loginCtrl = angular.module('MishWishApp.Login', ['ngResource']);
var Login;
(function (Login) {
    'use strict';
    var LoginCtrl = (function () {
        function LoginCtrl($scope, $state, LoginService) {
            debugger;
            var loginScope = this;
            // Login into mish wish system.
            loginScope.LogIn = function (userName, password) {
                var userDetails = {
                    username: userName,
                    password: password
                };
                var loginDetail = "grant_type=password&username=" + userName + "&password=" + password;
                // Login to system.
                LoginService.Login(userDetails)
                    .success(function (data, status, headers, config) {
                    if (data != null) {
                        LoginService.SetToken(data);
                    }
                })
                    .error(function (data, status, headers, config) {
                    // Error occur while update knowledge Asset.
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