angular.module('listingsModule.directives', []).directive('listing', [function () {
        return {
            templateUrl: '/partials/listings/_box_listing',
            scope: { listing: '=' },
            controller: function ($scope, $element, $attrs) {
                var listing = $scope.listing;
                $scope.title = listing.title;
                $scope.passing = listing.passing;
                $scope.failing = listing.failing;
                $scope.framework = listing.framework;
                $scope.language = listing.language;
                $scope.parent_app = listing.parent_app;
            }
        };
    }]);