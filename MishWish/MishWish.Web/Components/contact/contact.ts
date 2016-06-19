/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />

var contactCtrl = angular.module('MishWishApp.Contact', ['ngResource']);

module Contact {
    'use strict';
    class ContactCtrl {

        static $inject = ['$scope', '$state', 'ApiService'];
        constructor($scope, $state, ApiService) {

            function pageLoad() {
              
                // Login to system.
                ApiService.GetContacts()
                    .success(function (data, status, headers, config) {
                       
                        if (data != null) {

                          
                        }

                    })
                    .error(function (data, status, headers, config) {
                        


                    })
            }

            // Initial setup when contact controller load.
            pageLoad();
        }
    }

    contactCtrl.controller('ContactCtrl', ContactCtrl);

}