'use strict';

/* Controllers */

angular.module('listingsModule.controllers', ['listingsModule.services'])
  .controller('MainController', ['$scope', 'listingsFactory', function($scope, listingsFactory) {
  	console.log(listingsFactory.getListings());

  	listingsFactory.getListings().then(function(result) {
  		$scope.listings = result.data;
  	});
}]);