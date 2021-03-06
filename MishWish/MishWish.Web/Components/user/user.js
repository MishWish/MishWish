/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />
var userApp = angular.module('MishWishApp.User', ['ngResource']);
var UserApp;
(function (UserApp) {
    'use strict';
    var UserCtrl = (function () {
        function UserCtrl($scope, $state, ApiService, LoginService) {
            var userScope = this;
            // Initialize userDto.
            userScope.UserDto = new UserClass.UserClassDto({
                UserId: 0,
                AccountTypeCode: 1,
                Password: "",
                ConfirmPassword: "",
                DOB: "",
                EmailAddress: "",
                FirstName: "",
                LastName: "",
                MobileNumber: "",
                IsMale: true,
            });
            userScope.UserVM = new UserClass.UserVM({
                User: null
            });
            // Page load call
            function pageLoad() {
                userScope.UserVM.User = userScope.UserDto;
            }
            // Create new user.
            userScope.CreateUser = function (userDto) {
                LoginService.CreateUser(userDto)
                    .success(function (data, status, headers, config) {
                })
                    .error(function (data, status, headers, config) {
                    // Error occur while update knowledge Asset.
                });
            };
            // Initial setup of user app.
            pageLoad();
        }
        UserCtrl.$inject = ['$scope', '$state', 'ApiService', 'LoginService'];
        return UserCtrl;
    }());
    userApp.controller('UserCtrl', UserCtrl);
})(UserApp || (UserApp = {}));
//# sourceMappingURL=user.js.map