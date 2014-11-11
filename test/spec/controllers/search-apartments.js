'use strict';

describe('Controller: SearchApartmentsCtrl', function () {

  // load the controller's module
  beforeEach(module('roommateShareApp'));

  var SearchApartmentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchApartmentsCtrl = $controller('SearchApartmentsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
