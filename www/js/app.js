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
        StatusBar.styleDefault();
      }
    });

  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('m', {
        url: '/m',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('m.index', {
        url: '/index',
        views: {
          'menuContent': {
            templateUrl: 'templates/index.html'
          }
        }
      })
      .state('m.schedule', {
        url: '/schedule',
        views: {
          'menuContent': {
            templateUrl: 'templates/schedule.html'
          }
        }
      })
      .state('m.trophy', {
        url: '/trophy',
        views: {
          'menuContent': {
            templateUrl: 'templates/trophy.html'
          }
        }
      })
      .state('m.pictures', {
        url: '/pictures',
        views: {
          'menuContent': {
            templateUrl: 'templates/pictures.html'
          }
        }
      })
      .state('m.videos', {
        url: '/videos',
        views: {
          'menuContent': {
            templateUrl: 'templates/videos.html'
          }
        }
      })
      .state('m.sponsors', {
        url: '/sponsors',
        views: {
          'menuContent': {
            templateUrl: 'templates/sponsors.html'
          }
        }
      })
      .state('m.contacts', {
        url: '/contacts',
        views: {
          'menuContent': {
            templateUrl: 'templates/contacts.html'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/m/index');
  })
  .directive('renderSvg', function () {
    return {
      // Restrict it to be an attribute in this case
      restrict: 'A',
      // responsible for registering DOM listeners as well as updating the DOM
      link: function (scope, element, attrs) {
        jQuery('img.svg').each(function(){
          var $img = jQuery(this);
          var imgID = $img.attr('id');
          var imgClass = $img.attr('class');
          var imgURL = $img.attr('src');

          jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

          }, 'xml');

        });
      }
    };
  });
