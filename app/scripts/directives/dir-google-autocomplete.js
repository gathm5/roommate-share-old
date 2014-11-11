'use strict';

angular.module('roommateShareApp')
    .directive('googleAutoComplete', function ($timeout) {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, model) {
                var options = {
                    types: [],
                    componentRestrictions: {}
                }, keyword, place;
                scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
                keyword = scope.search.keyword();
                google.maps.event.addListener(scope.gPlace, 'place_changed', function () {
                    place = scope.gPlace.getPlace();
                    model.$setViewValue(place.name);
                    /*scope.$apply(function () {
                        console.log('place.name', place.name);
                        $timeout(function () {
                            element.val(place.name);
                            model.$setViewValue(place.name);
                            console.log('place.name', place.name);
                        });
                    });*/
                });
                if (keyword) {
                    $timeout(function () {
                        element.val(keyword);
                        scope.$apply(function () {
                            model.$setViewValue(keyword);
                        });
                    });
                }
            }
        };
    });
