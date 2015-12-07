'use strict';

describe('Prueba controlador de canciones', function () {

  // load the controller's module
  beforeEach(module('starter'));
  beforeEach(module('starter.controllers'));
  beforeEach(module('starter.services'));

  var $controller;

  /** Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SongsCtrl = $controller('SongsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

**/

  beforeEach(inject(function(_$controller_) {
      $controller = _$controller_;
  }));

  it('Verifica que esté definida la función para votar', function () {
    var $scope = {};
    var SongsCtrl = $controller('SongsCtrl', { $scope: $scope });
    expect($scope.votar).toBeDefined();
  });



});