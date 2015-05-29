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
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
   uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
    v: '3.17',
    libraries: 'weather,geometry,visualization'
   });
    $routeProvider
      .when('/404', {
        templateUrl: '404.html'
      })
      .when('/', {
        templateUrl: 'views/homePage.html',
        controller: 'homePageCtrl'
      })
      .when('/about', {
        templateUrl: 'views/aboutPage.html',
        controller: 'AboutpageCtrl'
      })
      .when('/education', {
        templateUrl: 'views/educationPage.html',
        controller: 'EducationpageCtrl'
      })
      .when('/education/shinSplints', {
       templateUrl: 'views/injuryPages/shinSplintsPage.html',
       controller: 'EducationpageCtrl'
      })
      .when('/education/runnersKnee', {
       templateUrl: 'views/injuryPages/runnersKneePage.html',
       controller: 'EducationpageCtrl'
      })
      .when('/education/neuromas', {
       templateUrl: 'views/injuryPages/neuromasPage.html',
       controller: 'EducationpageCtrl'
      })
      .when('/education/ibs', {
       templateUrl: 'views/injuryPages/ibsPage.html',
       controller: 'EducationpageCtrl'
      })
      .when('/education/hipPain', {
       templateUrl: 'views/injuryPages/hipPainPage.html',
       controller: 'EducationpageCtrl'
      })
      .when('/education/heelPain', {
       templateUrl: 'views/injuryPages/heelPainPage.html',
       controller: 'EducationpageCtrl'
      })
      .when('/education/bunions', {
       templateUrl: 'views/injuryPages/bunionsPage.html',
       controller: 'EducationpageCtrl'
      })
      .when('/education/backPain', {
       templateUrl: 'views/injuryPages/backPainPage.html',
       controller: 'EducationpageCtrl'
      })
      .when('/education/achilles', {
       templateUrl: 'views/injuryPages/achillesPage.html',
       controller: 'EducationpageCtrl'
      })
      .when('/education/injuryVideos',{
       templateUrl: 'views/injuryVideos.html',
       controller: 'EducationpageCtrl'
      })
      .when('/GFR', {
        templateUrl: 'views/goodFormRunning.html',
        controller: 'GoodformrunningCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contactPage.html',
        controller: 'ContactpageCtrl'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
