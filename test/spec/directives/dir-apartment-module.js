'use strict';

describe('Directive: dirApartmentModule', function () {

  // load the directive's module
  beforeEach(module('roommateShareApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dir-apartment-module></dir-apartment-module>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dirApartmentModule directive');
  }));
});
