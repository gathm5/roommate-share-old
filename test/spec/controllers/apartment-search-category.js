'use strict';

describe('Controller: ApartmentSearchCategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('roommateShareApp'));

  var ApartmentSearchCategoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApartmentSearchCategoryCtrl = $controller('ApartmentSearchCategoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
