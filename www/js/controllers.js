angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state, $ionicSideMenuDelegate) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.toggleLeftSideMenu = function () {
      $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.goTo = function (state) {
      $state.go(state);
    };

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/credits.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeCredits = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.credits = function () {
      $scope.modal.show();
      console.log("you tried");
    };
  })

  .controller('videoViewer',function($scope, $ionicModal, $timeout, $state){

    $scope.goTo = function (state) {
      $state.go(state);
    };

    $ionicModal.fromTemplateUrl('templates/credits.html', {
      scope: $scope
    }).then(function(modal){
      $scope.modal = modal;
    })

    $scope.openPicture = function(){
      $scope.modal.show();
      console.log("you tried");
    }

  })

  .controller('FullscreenImageCtrl',
  function ($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('picturemodal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.imageSrc = '../img/thisisdoneonpurpose.png';
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    $scope.showImage = function(index) {
      $scope.imageSrc  = 'https://dl.dropboxusercontent.com/u/107006905/snow'+ index+'.jpg';
      $scope.modal.show();
    }
  }
);
