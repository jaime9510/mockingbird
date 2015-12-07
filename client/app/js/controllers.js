angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SongsCtrl', function($scope, back_api) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  console.log('Songs controller');

  back_api.allSongs().success(function(data) {
    $scope.songs = data;
  });

  $scope.settings = {
    enableFriends: true
  };

  console.log($scope.songs);

})

.controller('RecommendationCtrl', function($scope, back_api) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  console.log('Recommendation controller');

  back_api.allRecommendations().success(function(data) {
    $scope.recommends = data;
  });

})

.controller('RankingCtrl', function($scope, back_api) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  console.log('Ranking controller');

  back_api.ranking().success(function(data) {
    $scope.ranking = data;
  });

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
