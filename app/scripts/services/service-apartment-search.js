'use strict';

angular.module('roommateShareApp')
    .service('ServiceApartmentSearch', [
        function ServiceApartmentSearch() {
            // AngularJS will instantiate a singleton by calling "new" on this function
            var apartments = {
                1: {
                    id: 1,
                    title: 'Nice apartment',
                    rent: '$2000',
                    bathroom: 2,
                    bedroom: 3,
                    image: './external/apartments/images/apartment1.jpg',
                    description: 'WindChime of Marin specializes in providing care for residents with Alzheimers and other forms of dementia. In everything that we do, we seek to provide a caring atmosphere and maintain the dignity that our residents deserve. WindChime of Marin is managed by Integral Senior Living, which is a privately owned company founded in 2000.',
                    posted: '9/2/2014'
                },
                2: {
                    id: 2,
                    title: 'Great apartment',
                    rent: '$1200',
                    bathroom: 1,
                    bedroom: 2,
                    image: './external/apartments/images/apartment3.jpg',
                    description: 'AlmaVia of San Rafael, situated in the heart of beautiful Marin County, is a lovely and vibrant community. It is the place to consider for those who believe in the possibilities of a wonderful life, at all stages of life! AlmaVia also offers a warm welcoming environment to visiting family and friends.',
                    posted: '8/2/2014'
                },
                3: {
                    id: 3,
                    title: 'Beautiful apartment',
                    rent: '$1200',
                    bathroom: 2,
                    bedroom: 2,
                    image: './external/apartments/images/apartment2.jpg',
                    description: 'Providing a peaceful environment for retirement living, Drake Terrace is an independent and assisted living community surrounded by landscaped grounds and walking paths. We are located close to both Northgate Mall Shopping Center and Kaiser San Rafael Medical Center in San Rafael. From our wellness programs to our many accommodations.',
                    posted: '8/14/2014'
                }
            };
            return {
                get: function (location) {
                    if (!location) {
                        return apartments;
                    }
                    for (var apartment in apartments) {
                        apartments[apartment].location = location;
                    }
                    return apartments;
                },
                id: function (key) {
                    if (key) {
                        return apartments[key];
                    }
                    return null;
                }
            };
        }
    ]);