'use strict';

angular.module('roommateShareApp')
    .directive('apartment', function () {
        return {
            templateUrl: 'views/directives/apartment-listing-item.html',
            restrict: 'E',
            controller: function ($scope, $state) {
                $scope.details = function (id) {
                    $state.go('init.search.apartments.details', {id: id});
                };
            }
        };
    });
