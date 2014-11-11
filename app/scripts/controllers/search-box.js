'use strict';

angular.module('roommateShareApp')
    .controller('SearchBoxCtrl', [
        '$scope',
        '$state',
        'ActiveSearchService',
        '$utilities',
        function ($scope, $state, ActiveSearchService, $utilities) {
            var place = ActiveSearchService.get();

            function searchPlace() {
                place = $scope.search.text;
                ActiveSearchService.set(place);
                $state.go('init.search.apartments', {
                    location: $utilities.stripSpace(place)
                });
            }

            function searchNeighbor() {
                place = $scope.search.text;
                ActiveSearchService.set(place);
                $state.go('init.search.neighbors', {
                    location: $utilities.stripSpace(place)
                });
            }

            function searchService() {
                place = $scope.search.text;
                ActiveSearchService.set(place);
                $state.go('init.search.services', {
                    location: $utilities.stripSpace(place)
                });
            }

            function keyword() {
                return ActiveSearchService.get();
            }

            $scope.search = {
                text: null,
                place: searchPlace,
                neighbor: searchNeighbor,
                services: searchService,
                keyword: keyword
            };

        }
    ]);