'use strict';

/**
 * @ngdoc function
 * @name footStoreApp.controller:GoodformrunningCtrl
 * @description
 * # GoodformrunningCtrl
 * Controller of the footStoreApp
 */
angular.module('footStoreApp')
  .controller('GoodformrunningCtrl', function ($scope) {
    var goodFormClasses = [
   {"level":"GFR Level 1",
    "date":"June 13th, 2015",
    "price": "Free"
   }
    ];

    $scope.goodFormClasses = goodFormClasses;
  });
