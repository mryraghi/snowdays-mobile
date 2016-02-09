// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('snowdays', ['ionic', 'starter.controllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('index', {
        url: '/',
        templateUrl: 'templates/index.html',
        controller: 'AppCtrl'
      })

      .state('info', {
        url: '/info',
        templateUrl: 'templates/info.html',
        controller: 'AppCtrl'
      })

      .state('app.schedule', {
        url: '/schedule',
        views: {
          'menuContent': {
            templateUrl: 'templates/schedule.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })
      .state('app.index', {
        url: '/index',
        views: {
          'menuContent': {
            templateUrl: 'templates/index.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
  })
  .directive('renderSwiper', function () {
    return {
      // Restrict it to be an attribute in this case
      restrict: 'A',
      // responsible for registering DOM listeners as well as updating the DOM
      link: function (scope, element, attrs) {
        var swiper = new Swiper('.swiper-container', {
          paginationClickable: true,
          pagination: '.swiper-pagination'
        });
      }
    };
  });
