'use strict';

/**
 * @ngdoc overview
 * @name footStoreApp
 * @description
 * # footStoreApp
 *
 * Main module of the application.
 */
angular
  .module('footStoreApp', [
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homePage.html',
        controller: 'homePageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
