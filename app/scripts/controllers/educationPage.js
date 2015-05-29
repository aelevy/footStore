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
   "image":"images/shinSplints/shinSplints.jpg",
   "pageLink":"#/education/shinSplints",
   "injuryTitle":"Shin Splints"
  },
 {
  "image":"images/runnersKnee/runnersKnee.jpg",
  "pageLink":"#/education/runnersKnee",
  "injuryTitle":"Runners Knee"
  },
{
 "image":"images/neuromas/neuroma1.jpg",
 "pageLink":"#/education/neuromas",
 "injuryTitle":"Neuromas"
 },
{
 "image":"images/ibs/ibs1.jpg",
 "pageLink":"#/education/ibs",
 "injuryTitle":"Iliotibial Band"
 },
{
 "image":"images/hipPain/hippain1.jpg",
 "pageLink":"#/education/hipPain",
 "injuryTitle":"Hip Pain"
 },
{
 "image":"images/heelpainPF/heelpainPF1.jpg",
 "pageLink":"#/education/heelPain",
 "injuryTitle":"Plantar Fasciatis"
 },
{
 "image":"images/bunions/bunions1.jpg",
 "pageLink":"#/education/bunions",
 "injuryTitle":"Bunions"
 },
{
 "image":"images/backpain/backpain1.jpg",
 "pageLink":"#/education/backPain",
 "injuryTitle":"Back Pain"
 },
{
 "image":"images/achilles/achilles1.jpg",
 "pageLink":"#/education/achilles",
 "injuryTitle":"Achilles Tendon"
 }
];

$scope.injuries = injuries;
  });
