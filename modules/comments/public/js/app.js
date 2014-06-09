'use strict';

// Declare app level module which depends on filters, and services
angular.module('listingsModule', [
  'ui.router',
  'listingsModule.filters',
  'listingsModule.services',
  'listingsModule.directives',
  'listingsModule.controllers'
]).
config(['$stateProvider', function($stateProvider) {

}]);
