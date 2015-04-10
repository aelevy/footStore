'use strict';

describe('Controller: EducationpageCtrl', function () {

  // load the controller's module
  beforeEach(module('footStoreApp'));

  var EducationpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EducationpageCtrl = $controller('EducationpageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
