'use strict';

angular.module('roommateShareApp')
    .directive('apartmentDetails', function () {
        return {
            templateUrl: 'views/directives/apartment-details.html',
            restrict: 'E',
            scope: {
                'apartmentDetails': '='
            },
            controller: function () {
                return;
            }
        };
    });