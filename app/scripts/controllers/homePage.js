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
   $scope.myInterval = 4500;
   var slides = $scope.slides = [
  {"image":"images/mainSlider/shirt.png"},
{"image":"images/mainSlider/GroupRuns.png"},
{"image":"images/mainSlider/GFR.png"},
   ];

var callToActions = $scope.callToActions = [
{"image":"meetteam.jpg",
"text":"Meet the Team",
"route":"#/about"},
{"image":"education.jpg",
"text":"Educate",
"route":"#/education"},
{"image":"goodformrunning.jpg",
"text":"Running Form",
"route":"#/GFR"},
];



  });
