/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />

var loginCtrl = angular.module('MishWishApp.Login', ['ngResource'])

module Login {
    'use strict';
    class LoginCtrl {

        static $inject = ['$scope', '$state', 'LoginService'];
        constructor($scope, $state, LoginService) {

            var loginScope = this;

            // Login into mish wish system.
            loginScope.LogIn = function (userName, password) {
                
                var userDetails = {
                    username: userName,
                    password: password
                };

                var loginDetail = "grant_type=password&username=" + userName+"&password=" + password;

                // Login to system.
                LoginService.Login(userDetails)
                    .success(function (data, status, headers, config) {
                        
                        if (data != null) {

                            LoginService.SetToken(data);
                        }

                    })
                    .error(function (data, status, headers, config) {
                        // Error occur while update knowledge Asset.


                    })

            };

            // Log out from mish wish system.
            loginScope.LogOut = function () {

            };
        }

        LogIn: (userName: string, password: string) => void; 
        LogOut: () => void;
    }

    loginCtrl.controller('LoginCtrl', LoginCtrl);
}