'use strict';

/**
 * @ngdoc function
 * @name footStoreApp.controller:MainrouteCtrl
 * @description
 * # MainrouteCtrl
 * Controller of the footStoreApp
 */
angular.module('footStoreApp')
  .controller('homePageCtrl', function ($scope) {
   $scope.myInterval = 5000;
   var slides = $scope.slides = [
  {"image":"images/mainSlider/shirtfocus.png"},
 {"image":"images/mainSlider/staff.jpg"},
   ];


  });
