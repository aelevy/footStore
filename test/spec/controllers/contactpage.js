'use strict';

describe('Controller: ContactpageCtrl', function () {

  // load the controller's module
  beforeEach(module('footStoreApp'));

  var ContactpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactpageCtrl = $controller('ContactpageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
