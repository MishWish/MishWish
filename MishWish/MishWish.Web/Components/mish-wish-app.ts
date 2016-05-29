/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/bootstrap/bootstrap.d.ts" />

var app = angular.module('MishWishApp', ['ngRoute', 'ui.router', 'ngMaterial','MishWishApp.User']);

app.config(['$routeProvider', '$provide', '$httpProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($routeProvider, $provide, $httpProvider, $locationProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider) {

    // By default go to the fist page i.e Home page of app.
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('MishWishHome', {
        url: "/",
        views: {
            "LeftPanel@": {
                templateUrl: '/Components/panel/left-panel.html',
            },
            "Content@": {
                templateUrl: '/Components/admin/admin-dash.html',
            },
            "RightPanel@": {
                templateUrl: '/Components/panel/right-panel.html',
            },
        }
    }).state('MishWishHome.UserRegistration', {
        url: "/UserRegistration",
        views: {
            "Content@": {
                templateUrl: '/Components/user/user-form.html',
            }
        }
    })

    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('cyan')
        .dark();

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

    $mdThemingProvider.theme('default')
        .primaryPalette('blue', {
            'default': '400', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('purple', {
            'default': '200' // use shade 200 for default, and keep all other shades the same
        }).dark();

}]);

module MishWishApp {
    'use strict';
    class MishWishCtrl {

        static $inject = ['$scope', '$state'];
        constructor($scope, $state) {

            var mishWishScope = this;

            // Setup on state chnage.
            $scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {

            });

            // To select left slider panel
            mishWishScope.onTabChange = function (selectedTab) {

            };

        }

        onTabChange: (selectedTab: number) => void;

    }

    app.controller('MishWishCtrl', MishWishCtrl);
}


