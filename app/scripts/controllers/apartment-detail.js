'use strict';

angular.module('roommateShareApp')
    .controller('ApartmentDetailCtrl', [
        '$scope',
        '$stateParams',
        'ServiceApartmentSearch',
        function ($scope, $stateParams, ServiceApartmentSearch) {
            var id = $stateParams.id;
            var details = ServiceApartmentSearch.id(id);
            $scope.apartmentDetails = details;
        }
    ]);