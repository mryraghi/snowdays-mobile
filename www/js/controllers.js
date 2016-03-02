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
  })

  //huge controller to handle the schedule modal views
  .controller('ScheduleModal', function($scope, $ionicModal){

    $ionicModal.fromTemplateUrl('scheduleextra.html', {
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
      $scope.extrainfotext = '';
      $scope.extrainfotext2 = '';
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

    $scope.showExtraInfoone = function(index) {
      $scope.extrainfotext = 'nothing';
      $scope.extrainfotext2 = '';
      switch (index){
        case 101: $scope.extrainfotext = 'The Check In will take place in room D103 @ UNIBZ.';
          $scope.extrainfotext2 = ' Ask and/or follow the signs to get to it.';
              break;
        case 102: $scope.extrainfotext = 'Dinner packages are distributed infront of the Mensa @ UNIBZ';
              break;
        case 103: $scope.extrainfotext = 'Bus depart from ONLY UNIBZ. Please make sure to be here in time!';
          $scope.extrainfotext2 = 'First bus leave at 17.40, LAST BUS LEAVES 18.20';
          break;
        case 104: $scope.extrainfotext = 'Night skiing, snowboarding and sledging @ Obereggen';
          break;
        case 105: $scope.extrainfotext = 'Bus departure from Obereggen!';
          break;
        case 106: $scope.extrainfotext = 'FLUO PARTY – Light the Snow @ Mirò';
          break;
        case 107: $scope.extrainfotext = 'Opening ceremony @ Mirò';
          break;
      }
      $scope.modal.show();
    }

    $scope.showExtraInfotwo = function(index) {
      $scope.extrainfotext = 'nothing';
      $scope.extrainfotext2 = '';
      switch (index){
        case 201: $scope.extrainfotext = 'Breakfast @ Mensa UNIBZ, @ Haus St. Benedikt and @ Univercity';
          $scope.extrainfotext2 = ' @ Haus St. Benedikt and Univercity : Breakfast finishes at 08.30';
          break;
        case 202: $scope.extrainfotext = 'Bus depart from UNIBZ. LAST BUS at 9.30';
          $scope.extrainfotext2 = '@ Haus St. Benedikt and Univercity : Bus Leave at 08.15 and 08.45';
          break;
        case 203: $scope.extrainfotext = 'Skii and Snowboard session @ Ultental';
          break;
        case 204: $scope.extrainfotext = 'Salewa Ski and Snowboard Race @ Ultental';
          $scope.extrainfotext2 = 'Sign up at Check In!';
          break;
        case 205: $scope.extrainfotext = 'Snowshoeing – Iceskating Group 1';
          $scope.extrainfotext2 = 'Sign up at Check In!';
          break;
        case 2051: $scope.extrainfotext = 'Ski Course for Beginners with professional teacher';
          $scope.extrainfotext2 = 'Sign up at Check In!';
          break;
        case 206: $scope.extrainfotext = 'Lunch @ Ultental'; // need more info
          break;
        case 207: $scope.extrainfotext = 'Paragliding show by FALL with STYLE ACRO TEAM';
          break;
        case 208: $scope.extrainfotext = 'Snowshoeing – Iceskating Group 2';
          $scope.extrainfotext2 = 'Sign up at Check In!';
          break;
        case 209: $scope.extrainfotext = 'Snack Break with Spirit Games!'; // need more info
          break;
        case 2010: $scope.extrainfotext = 'Bus departures from Ultental'; // need more info
          break;
        case 2011: $scope.extrainfotext = 'Dinner @ Mensa UNIBZ'; // need more info
          break;
        case 2012: $scope.extrainfotext = 'TOGA PARTY - Invoking Khione @ UNIBZ'; // need more info
          break;
      }
      $scope.modal.show();
    }

    $scope.showExtraInfothree = function(index) {
      $scope.extrainfotext = 'nothing';
      $scope.extrainfotext2 = '';
      switch (index){
        case 301: $scope.extrainfotext = 'Breakfast @ Mensa UNIBZ, @ Haus St. Benedikt and @ Univercity';
          break;
        case 302: $scope.extrainfotext = 'Bus depart from UNIBZ, Haus St. Benedikt and Univercity. Last Bus at 11.00';
          $scope.extrainfotext2 = '@ Haus St. Benedikt and Univercity : Bus Leave at 09.45 and 10.15';
          break;
        case 303: $scope.extrainfotext = 'Lunch @ Hotel Il Caminetto in Canazei';
          break;
        case 304: $scope.extrainfotext = 'Alpenstoff Human Table Football and Lifeshot Snowvolley Tournament'; // need more info
          break;
        case 305: $scope.extrainfotext = 'Swimmingpool session ONLY with pre-enrollment at check-in';  // need more info
          break;
        case 306: $scope.extrainfotext = 'RedBull Riding!'; // need more info
          break;
        case 307: $scope.extrainfotext = 'Salewa Table Boulder'; // need more info
          break;
        case 308: $scope.extrainfotext = 'Snack Break with Spirit Games'; // need more info
          break;
        case 309: $scope.extrainfotext = 'Shower Time...'; // need more info
          break;
        case 3010: $scope.extrainfotext = 'Chill Out session @ Theater Gran Tobià'; // need more info
          break;
        case 3011: $scope.extrainfotext = 'Dinner @ Gran Tobià'; // need more info
          break;
        case 3012: $scope.extrainfotext = 'Awards and Final Ceremony @ Gran Tobià'; // need more info
          break;
      }
      $scope.modal.show();
    }
});
