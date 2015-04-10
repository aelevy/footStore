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
   {"image":"https://placehold.it/200x200"},
  {"image":"https://placehold.it/200x200"},
 {"image":"https://placehold.it/200x200"},
{"image":"https://placehold.it/200x200"},
{"image":"https://placehold.it/200x200"},
{"image":"https://placehold.it/200x200"}
    ]

    $scope.staff = staff;
  });
