'use strict';

describe('Controller: CssCtrl', function () {

  // load the controller's module
  beforeEach(module('csssiteApp'));

  var CssCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    CssCtrl = $controller('CssCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CssCtrl.awesomeThings.length).toBe(3);
  });
});
