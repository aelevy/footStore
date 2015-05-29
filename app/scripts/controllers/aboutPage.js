'use strict';

/**
 * @ngdoc function
 * @name footStoreApp.controller:AboutpageCtrl
 * @description
 * # AboutpageCtrl
 * Controller of the footStoreApp
 */
angular.module('footStoreApp')
  .controller('AboutpageCtrl', function ($scope) {
    var staff = [
  {"name":"Tricia",
   "image":"images/trish.png"},
 {"name":"Natalie",
  "image":"images/Natalie.png"},
{"name":"Andrew",
 "image":"images/andrew.png"},
{"name":"Brent",
 "image":"images/brent.png"},
{"name":"Wendy",
 "image":"images/wendy.png"}
    ]

    $scope.staff = staff;
  });
