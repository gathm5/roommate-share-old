'use strict';

angular.module('roommateShareApp')
    .controller('SearchApartmentsCtrl', [
        '$scope',
        'ServiceApartmentSearch',
        '$stateParams',
        '$utilities',
        function ($scope, ServiceApartmentSearch, $stateParams, $utilities) {
            var apartments, location = $stateParams.location;
            apartments = ServiceApartmentSearch.get($utilities.addSpace(location));
            $scope.search = {
                apartments: apartments
            };
        }
    ]);