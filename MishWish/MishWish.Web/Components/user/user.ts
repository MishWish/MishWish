/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />

var userApp = angular.module('MishWishApp.User',['ngResource'])

module UserApp {
    'use strict';
    class UserCtrl {

        static $inject = ['$scope', '$state', 'ApiService','LoginService'];

        constructor($scope, $state, ApiService, LoginService) {

            var userScope = this;

            // Initialize userDto.
            userScope.UserDto = new UserClass.UserClassDto({
                UserId: 0,
                AccountTypeCode: 1,
                Password: "",
                ConfirmPassword : "",
                DOB: "",
                EmailAddress: "",
                FirstName: "",
                LastName: "",
                MobileNumber: "",
                IsMale : true,
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

                       
                    })

            };

            // Initial setup of user app.
            pageLoad();

        }

        UserDto: UserClass.UserClassDto;
        CreateUser: (userDto: any) => void;
        UserVM: UserClass.UserVM;
    }

    userApp.controller('UserCtrl', UserCtrl);
}