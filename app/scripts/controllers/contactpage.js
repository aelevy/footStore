'use strict';

/**
 * @ngdoc function
 * @name footStoreApp.controller:ContactpageCtrl
 * @description
 * # ContactpageCtrl
 * Controller of the footStoreApp
 */
angular.module('footStoreApp')
  .controller('ContactpageCtrl', function ($scope, uiGmapGoogleMapApi) {
   uiGmapGoogleMapApi.then(function(maps) {

   });
   $scope.map = { center: { latitude: 32.830593, longitude: -79.825432 }, zoom: 14 };
   $scope.marker = {
    id: 1,
    coords: {
     latitude: 32.830593,
     longitude: -79.825432
    },
   };

   $scope.map2 = { center: { latitude: 32.863488, longitude: -80.023833 }, zoom: 14 };
   $scope.marker2 = {
    id: 2,
    coords: {
     latitude: 32.863488,
     longitude: -80.023833
    }
   }
  });
