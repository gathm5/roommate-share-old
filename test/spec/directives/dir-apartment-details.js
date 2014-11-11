'use strict';

describe('Directive: dirApartmentDetails', function () {

  // load the directive's module
  beforeEach(module('roommateShareApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dir-apartment-details></dir-apartment-details>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dirApartmentDetails directive');
  }));
});
