/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />
var contactCtrl = angular.module('MishWishApp.Contact', ['ngResource']);
var Contact;
(function (Contact) {
    'use strict';
    var ContactCtrl = (function () {
        function ContactCtrl($scope, $state, ApiService) {
            function pageLoad() {
                // Login to system.
                ApiService.GetContacts()
                    .success(function (data, status, headers, config) {
                    if (data != null) {
                    }
                })
                    .error(function (data, status, headers, config) {
                });
            }
            // Initial setup when contact controller load.
            pageLoad();
        }
        ContactCtrl.$inject = ['$scope', '$state', 'ApiService'];
        return ContactCtrl;
    }());
    contactCtrl.controller('ContactCtrl', ContactCtrl);
})(Contact || (Contact = {}));
//# sourceMappingURL=contact.js.map