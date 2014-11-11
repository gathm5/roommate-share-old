'use strict';

angular.module('roommateShareApp')
    .service('ActiveSearchService', [
        function ServiceSearchActive() {
            // AngularJS will instantiate a singleton by calling "new" on this function
            var activeSearchData = null;
            return {
                get: function () {
                    return activeSearchData;
                },
                set: function (place) {
                    activeSearchData = place;
                }
            };
        }
    ]);