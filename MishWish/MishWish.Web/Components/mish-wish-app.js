/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../classes/mishwishclass.ts" />
/// <reference path="../scripts/typings/bootstrap/bootstrap.d.ts" />
var app = angular.module('MishWishApp', ['ngRoute', 'ui.router', 'ngMaterial', 'ngMdIcons', 'MishWishApp.User', 'MishWishApp.ApiService', 'MishWishApp.LoginService', 'ngMaterialSidemenu', 'MishWishApp.Login', 'MishWishApp.Contact']);
app.config(['$routeProvider', '$provide', '$httpProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($routeProvider, $provide, $httpProvider, $locationProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider) {
        // By default go to the fist page i.e Home page of app.
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('MishWishHome', {
            url: "/",
            views: {
                "LeftPanel@": {
                    templateUrl: '/Components/panel/left-panel.html',
                },
                //"MishWishContent@": {
                //    templateUrl: '/Components/mish-wish.html',
                //},
                //"RightPanel@": {
                //    templateUrl: '/Components/panel/right-panel.html',
                //},
                "Login@": {
                    templateUrl: '/Components/login/login.html'
                }
            }
        }).state('MishWishHome.UserRegistration', {
            url: "UserRegistration",
            views: {
                "SignUp@": {
                    templateUrl: '/Components/user/user.html',
                }
            }
        }).state('MishWishHome.Recharge', {
            url: "Recharge",
            views: {
                "Content@": {
                    templateUrl: '/Components/recharge/recharge.html',
                }
            }
        }).state('MishWishHome.Contact', {
            url: "Contact",
            views: {
                "Content@": {
                    templateUrl: '/Components/contact/contact.html',
                }
            }
        }).state('MishWishHome.DTH', {
            url: "DTH",
            views: {
                "Content@": {
                    templateUrl: '/Components/dth/dth-form.html',
                }
            }
        }).state('MishWishHome.DataCard', {
            url: "DataCard",
            views: {
                "Content@": {
                    templateUrl: '/Components/data_card/data-card.html',
                }
            }
        })
            .state('MishWishHome.AddToMoney', {
            url: "AddToMoney",
            views: {
                "Content@": {
                    templateUrl: '/Components/add_to_money/add-to-money.html',
                }
            }
        });
        $mdThemingProvider.theme('docs-dark')
            .primaryPalette('cyan')
            .dark();
        $mdThemingProvider.theme('md-cyan-theme')
            .primaryPalette('blue');
    }]);
var MishWishApp;
(function (MishWishApp) {
    'use strict';
    var MishWishCtrl = (function () {
        function MishWishCtrl($scope, $state, ApiService) {
            var mishWishScope = this;
            // MishWish VM that containt method and variable.
            mishWishScope.MishWishVM = new MishWishClass.MishWishClassVM({
                OnTabChange: null,
                UserList: null,
                SelectedTab: 1,
            });
            // Setup on state chnage.
            $scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
            });
            // To select left slider panel
            mishWishScope.MishWishVM.OnTabChange = function (selectedTab) {
                // Temprory hard coded.
                switch (selectedTab) {
                    case 1:
                        $state.go('MishWishHome.Recharge');
                        break;
                    case 2:
                        $state.go('MishWishHome.Contact');
                        break;
                    case 3:
                        $state.go('MishWishHome.DTH');
                        break;
                    case 4:
                        $state.go('MishWishHome.DataCard');
                        break;
                    case 5:
                        $state.go('MishWishHome.AddToMoney');
                        break;
                }
            };
            mishWishScope.onSignUp = function () {
                $state.go('MishWishHome.UserRegistration');
                mishWishScope.IsSignUp = true;
            };
            mishWishScope.onRegisterNewUser = function () {
                $state.go('MishWishHome.Recharge');
                mishWishScope.IsLoginSuccess = true;
                mishWishScope.IsSignUp = false;
            };
        }
        MishWishCtrl.$inject = ['$scope', '$state', 'ApiService', 'LoginService'];
        return MishWishCtrl;
    }());
    app.controller('MishWishCtrl', MishWishCtrl);
})(MishWishApp || (MishWishApp = {}));
//# sourceMappingURL=mish-wish-app.js.map