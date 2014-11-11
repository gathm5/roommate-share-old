'use strict';

angular.module('roommateShareApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.router',
    'utilities.module',
    'google-maps',
    'ngTouch',
    'ui.keypress'
])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('init', {
                    url: '/',
                    views: {
                        'Header@': {
                            templateUrl: 'views/header.html',
                            controller: 'HeaderCtrl'
                        },
                        'SearchBox@': {
                            templateUrl: 'views/content-search-box.html',
                            controller: 'SearchBoxCtrl'
                        },
                        'Map@': {
                            templateUrl: 'views/map-static.html'
                        }
                    }
                })
                .state('init.search', {
                    views: {
                        'SearchBox@': {},
                        'Map@': {
                            templateUrl: 'views/map-content.html',
                            controller: 'MapContentCtrl'
                        }
                    }
                })
                .state('init.search.apartments', {
                    url: 'apartments/:location',
                    views: {
                        'ResultBox@': {
                            templateUrl: 'views/result-box.html',
                            controller: 'SearchApartmentsCtrl'
                        },
                        'ResultCategory@init.search.apartments': {
                            templateUrl: 'views/apartment-search-category.html',
                            controller: 'ApartmentSearchCategoryCtrl'
                        },
                        'Footer@': {
                            templateUrl: 'views/search-filter-box.html',
                            controller: 'SearchFilterBoxCtrl'
                        }
                    }
                })
                .state('init.search.apartments.details', {
                    url: '/:id',
                    views: {
                        'ApartmentDetail@init.search.apartments': {
                            templateUrl: 'views/apartment-detail.html',
                            controller: 'ApartmentDetailCtrl'
                        }
                    }
                })
                .state('init.search.neighbors', {
                    url: 'neighbors/:location',
                    views: {

                    }
                })
                .state('init.search.services', {
                    url: 'services/:location',
                    views: {

                    }
                });
            $urlRouterProvider.otherwise('/');
        }
    ])
    .run(function ($rootScope, $state, $stateParams) {
        FastClick.attach(document.body, null);
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeSuccess', function (toParams, to, fromParams, from) {
            $rootScope.$state.$previous = from;
            $rootScope.$state.$previousParams = fromParams;
        });
    });