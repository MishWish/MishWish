/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../classes/mishwishclass.ts" />
/// <reference path="../scripts/typings/bootstrap/bootstrap.d.ts" />

var app = angular.module('MishWishApp', ['ngRoute', 'ui.router', 'ngMaterial', 'ngMdIcons', 'MishWishApp.User', 'MishWishApp.ApiService', 'MishWishApp.LoginService', 'ngMaterialSidemenu','MishWishApp.Login']);

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
            "RightPanel@": {
                templateUrl: '/Components/panel/right-panel.html',
            },
            "Login@": {
                templateUrl:'/Components/login/login.html'
            }
        }
    }).state('MishWishHome.UserRegistration', {
        url: "UserRegistration",
        views: {
            "SignUp@": {
                templateUrl: '/Components/user/user-form.html',
            }
        }
    }).state('MishWishHome.Contact', {
        url: "Contact",
        views: {
            "Content@": {
                templateUrl: '/Components/contact/Contact.html',
            }
        }
    }).state('MishWishHome.DTH', {
        url: "DTH",
        views: {
            "Content@": {
                templateUrl: '/Components/dth/Dth_form.html',
            }
        }
    }).state('MishWishHome.AddToMoney', {
        url: "AddToMoney",
        views: {
            "Content@": {
                templateUrl: '/Components/addToMoney/addToMoney.html',
            }
        }
    })


    $mdThemingProvider.theme('docs-dark')
        .primaryPalette('cyan')
        .dark();

    $mdThemingProvider.theme('md-cyan-theme')
        .primaryPalette('blue');
       
        

    //$mdThemingProvider.definePalette('amazingPaletteName', {
    //    '50': 'ffebee',
    //    '100': 'ffcdd2',
    //    '200': 'ef9a9a',
    //    '300': 'e57373',
    //    '400': 'ef5350',
    //    '500': 'f44336',
    //    '600': 'e53935',
    //    '700': 'd32f2f',
    //    '800': 'c62828',
    //    '900': 'b71c1c',
    //    'A100': 'ff8a80',
    //    'A200': 'ff5252',
    //    'A400': 'ff1744',
    //    'A700': 'd50000',
    //    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
    //    // on this palette should be dark or light
    //    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
    //        '200', '300', '400', 'A100'],
    //    'contrastLightColors': undefined    // could also specify this if default was 'dark'
    //});
    //$mdThemingProvider.theme('default')
    //    .primaryPalette('amazingPaletteName')

    //$mdThemingProvider.theme('default')
    //    .primaryPalette('blue', {
    //        'default': '400', // by default use shade 400 from the pink palette for primary intentions
    //        'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
    //        'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
    //        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    //    })
    //    // If you specify less than all of the keys, it will inherit from the
    //    // default shades
    //    .accentPalette('purple', {
    //        'default': '200' // use shade 200 for default, and keep all other shades the same
    //    }).dark();

}]);

module MishWishApp {
    'use strict';
    class MishWishCtrl {

        static $inject = ['$scope', '$state', 'ApiService','LoginService'];
        constructor($scope, $state, ApiService) {

            var mishWishScope = this;

            // MishWish VM that containt method and variable.
            mishWishScope.MishWishVM = new MishWishClass.MishWishClassVM({
                OnTabChange: null,
                UserList: null,
                SelectedTab : 1, // By default selected tab is contact.
            });
                 

            // Setup on state chnage.
            $scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {

            });

            // To select left slider panel
            mishWishScope.MishWishVM.OnTabChange = function (selectedTab) {
              
                // Temprory hard coded.
                switch (selectedTab)
                {
                    case 1:  // Contact tab.
                        $state.go('MishWishHome.Contact');
                        break;
                        
                    case 2: // DTH tab.
                        $state.go('MishWishHome.DTH');
                        break;
                    case 3: // Add money tab.
                        $state.go('MishWishHome.AddToMoney');
                        break;
                }

            };

            mishWishScope.onSignUp = function () {
                $state.go('MishWishHome.UserRegistration');
                mishWishScope.IsSignUp = true;
            };

            mishWishScope.onRegisterNewUser = function () {
                $state.go('MishWishHome.Contact');
                mishWishScope.IsLoginSuccess = true;
                mishWishScope.IsSignUp = false;
            }

        }

        onTabChange: (selectedTab: number) => void;
        onSignUp: () => void;
        onRegisterNewUser: () => void;
        IsSignUp: boolean;
        IsLoginSuccess: boolean;
        MishWishVM: MishWishClass.MishWishClassVM;

    }

    app.controller('MishWishCtrl', MishWishCtrl);
}


