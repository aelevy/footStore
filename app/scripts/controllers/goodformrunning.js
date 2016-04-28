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

 {
  "level":"GFR Level 1",
 "date":"November 20th",
 "location":"Mount Pleasant",
 "price": "Free"
}
    ];

    $scope.goodFormClasses = goodFormClasses;
  });
