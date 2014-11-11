'use strict';

describe('Service: serviceApartmentSearch', function () {

  // load the service's module
  beforeEach(module('roommateShareApp'));

  // instantiate service
  var serviceApartmentSearch;
  beforeEach(inject(function (_serviceApartmentSearch_) {
    serviceApartmentSearch = _serviceApartmentSearch_;
  }));

  it('should do something', function () {
    expect(!!serviceApartmentSearch).toBe(true);
  });

});
