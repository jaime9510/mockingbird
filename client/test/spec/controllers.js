'use strict';

describe('Testing controlador canciones', function() {

  // Arrange
  var scope = {};
  var controller;
  var back_api;
  var ionicPopupMock;

  beforeEach(module('starter.controllers'));
  beforeEach(module('starter.services'));

  beforeEach(inject(function($controller, $rootScope, $injector) {

    // mock $ionicPopup
		ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['alert']);

    back_api = $injector.get('back_api');
    scope = $rootScope.$new();
    controller = $controller('SongsCtrl', {
      $scope: scope,
      back_api: back_api,
      $ionicPopup: ionicPopupMock
    });
  }));

  // Act and assert
  it('La variable songs no debe estar definida', function() {

     back_api.allSongs();

     expect(scope.songs).not.toBeDefined();
  });

  it('Debe ser posible votar por una canción', function() {

    scope.votar({
      "_id":"7774a859e4b00d59f0b723d7",
      "name":"Blanca vete",
      "artist":"Los Primos Perdidos",
      "genre":"Bachata"
    });

    expect(ionicPopupMock.alert).toBeDefined();
  });

});

describe('Testing controlador ranking', function() {

  // Arrange
  var scope = {};
  var controller;
  var back_api;
  beforeEach(module('starter.controllers'));
  beforeEach(module('starter.services'));

  beforeEach(inject(function($controller, $rootScope, $injector) {

    back_api = $injector.get('back_api');
    scope = $rootScope.$new();
    controller = $controller('RankingCtrl', {
      $scope: scope,
      back_api: back_api
    });
  }));

  // Act and assert
  it('La variable ranking no debe estar definida', function() {
    expect(scope.ranking).not.toBeDefined();
  });

});

describe('Testing controlador Recomendaciones', function() {

  // Arrange
  var scope = {};
  var controller;
  var back_api;
  beforeEach(module('starter.controllers'));
  beforeEach(module('starter.services'));

  beforeEach(inject(function($controller, $rootScope, $injector) {

    back_api = $injector.get('back_api');
    scope = $rootScope.$new();
    controller = $controller('RecommendationCtrl', {
      $scope: scope,
      back_api: back_api
    });
  }));

  // Act and assert
  it('La lista de recomendaciones todavia no debe estar definida', function() {

    expect(scope.recommends).not.toBeDefined();
  });

});


describe('Testing account', function() {

  // Arrange
  var scope = {};
  var controller;
  beforeEach(module('starter.controllers'));

  beforeEach(inject(function($controller, $rootScope) {

    scope = $rootScope.$new();
    controller = $controller('AccountCtrl', {
      $scope: scope
    });
  }));

  // Act and assert
  it('Debe tener la variable settings asignada', function() {
    expect(scope.settings).toBeDefined();
  });

});

describe('App file', function() {

  var ionicPlatformMock;

  beforeEach(module('starter'));

  beforeEach(inject(function() {

    // mock
    ionicPlatformMock = jasmine.createSpyObj('$ionicPlatform spy', ['ready']);

  }));

  // Act and assert
  it('Debe tener la variable settings asignada', function() {
    expect(ionicPlatformMock.ready).toBeDefined();
  });

});
