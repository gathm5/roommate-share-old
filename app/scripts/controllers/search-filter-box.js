'use strict';

angular.module('roommateShareApp')
    .controller('SearchFilterBoxCtrl', [
        '$scope',
        '$timeout',
        function ($scope, $timeout) {
            var filter = {
                property: {
                    price: {
                        min: {
                            low: 500,
                            high: 2000,
                            model: 1000
                        },
                        max: {
                            low: 2000,
                            high: 4000,
                            model: 2000
                        },
                        default: 1200,
                        step: 100
                    }
                }
            };
            $scope.filter = filter;
            $timeout(function () {
                $scope.filter.property.price.model = $scope.filter.property.price.default;
            });
        }
    ]);