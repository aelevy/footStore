'use strict';

/**
 * @ngdoc function
 * @name footStoreApp.controller:EducationpageCtrl
 * @description
 * # EducationpageCtrl
 * Controller of the footStoreApp
 */
angular.module('footStoreApp')
  .controller('EducationpageCtrl', function ($scope) {
   var injuries = [
  {
   "image":"https://placehold.it/200x200",
   "pageLink":"#/education/shinSplints"
  },
 {
  "image":"https://placehold.it/200x200",
  "pageLink":"#/education/runnersKnee"
  },
{
 "image":"https://placehold.it/200x200",
 "pageLink":"#/education/neuromas"
 },
{
 "image":"https://placehold.it/200x200",
 "pageLink":"#/education/ibs"
 },
{
 "image":"https://placehold.it/200x200",
 "pageLink":"#/education/hipPain"
 },
{
 "image":"https://placehold.it/200x200",
 "pageLink":"#/education/heelPain"
 },
{
 "image":"https://placehold.it/200x200",
 "pageLink":"#/education/bunions"
 },
{
 "image":"https://placehold.it/200x200",
 "pageLink":"#/education/backPain"
 },
{
 "image":"https://placehold.it/200x200",
 "pageLink":"#/education/achilles"
 }
];

$scope.injuries = injuries;
  });
