'use strict';

describe('Controller: SearchNeighborsCtrl', function () {

  // load the controller's module
  beforeEach(module('roommateShareApp'));

  var SearchNeighborsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchNeighborsCtrl = $controller('SearchNeighborsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
