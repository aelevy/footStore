'use strict';

describe('Controller: AboutpageCtrl', function () {

  // load the controller's module
  beforeEach(module('footStoreApp'));

  var AboutpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutpageCtrl = $controller('AboutpageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
