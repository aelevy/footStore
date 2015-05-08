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
   {"name":"Carolyn",
    "image":"images/carolyn.jpg"},
  {"name":"Tricia",
   "image":"images/tricia.jpg"},
 {"name":"Natalie",
  "image":"images/natalie.jpg"},
{"name":"Andrew",
 "image":"images/andrew.jpg"},
{"name":"Brent",
 "image":"images/brent.jpg"},
{"name":"Wendy",
 "image":"images/wendy.jpg"}
    ]

    $scope.staff = staff;
  });
