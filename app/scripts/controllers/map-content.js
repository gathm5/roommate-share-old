'use strict';

angular.module('roommateShareApp')
    .controller('MapContentCtrl', [
        '$scope',
        function ($scope) {
            $scope.map = {
                zoom: 3,
                center: {
                    latitude: 51.219053,
                    longitude: 4.404418
                },
                options: {
                    scrollwheel: true
                },
                layer: {
                    weather: true
                }
            };
        }
    ]);