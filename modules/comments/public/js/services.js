'use strict';
/* Services */
// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('listingsModule.services', []).factory('listingsFactory', [
    '$http',
    function ($http) {
        return {
            getListings: function () {
                return $http.get('/api/tests');
            }
        };
    }
]);