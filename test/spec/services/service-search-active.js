'use strict';

describe('Service: serviceSearchActive', function () {

  // load the service's module
  beforeEach(module('roommateShareApp'));

  // instantiate service
  var serviceSearchActive;
  beforeEach(inject(function (_serviceSearchActive_) {
    serviceSearchActive = _serviceSearchActive_;
  }));

  it('should do something', function () {
    expect(!!serviceSearchActive).toBe(true);
  });

});
