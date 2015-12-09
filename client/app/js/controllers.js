angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SongsCtrl', function($scope, $ionicPopup, back_api) {

  back_api.allSongs().success(function(data) {
    $scope.songs = data;
  });

  $scope.votar = function(song) {

    back_api.votar(song).success(function(data) {
      $ionicPopup.alert({
           title: 'Voto registrado exitosamente',
           template: 'Usted a recomendado la canción ' + song.name
         });
    });

  };

})

.controller('RecommendationCtrl', function($scope, back_api) {


  back_api.allRecommendations().success(function(data) {
    $scope.recommends = data;
  });

})

.controller('RankingCtrl', function($scope, back_api) {

  back_api.ranking().success(function(data) {
    $scope.ranking = data;
  });

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
