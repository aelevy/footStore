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
   {"name":"Robyn Glassman",
   "image":"images/rsz_robyn.jpg",
   "info":"Has worked with The Foot Store since 2007. AA from Essex Community College. BS from Towson State University where she played soccer and played/coached softball. 25 yrs experience in Accounting and Bookkeeping practices. 20 yrs experience in Medical Insurance Management. She spends time with her grown children Coaching Sports, enjoying outdoor activities, cooking and listening to music."},
  {"name":"Tricia Gross",
   "image":"images/trish.png",
   "info":"Tricia was born and raised in Cincinnati, OH and has lived in the Carolinas for more than 15 years. She now calls Charleston home. She played and coached volleyball at Wright State and the University of Dayton. She has two grown children, and she stays active walking and riding bikes. Tricia has worked at The Foot Store since Jan 2013. She says the positive learning environment created at The Foot Store has certainly complimented her own personal outlook – always look for the good and strive to help others do the same."},
 {"name":"Natalie McCoy",
  "image":"images/Natalie.png",
  "info":"Natalie has lived in Charleston for the past seven years and has loved every minute of being in the Lowcountry. For the past four years she worked as a podiatric assistant in the Charleston area, having the privilege to work with some of best doctors in the state. She is very excited about furthering her education on the preventative side of foot health. There’s nothing like happy feet!!"},
{"name":"Brent Clauser",
 "image":"images/brent.png",
 "info":"Brent has been racing 5ks and up since he was eight years old giving him years of racing and running experience, he ran cross country and track in college from 400 meters to 5 mile races, recently he has been training for ultra marathons."},
{"name":"Howie Schomer",
 "image":"images/rsz_howie.jpg",
 "info":"I've been running for years, racing every distance from 1 mile to 50K I've helped out with or directed dozens of races in the low-country and am the cofounder and director of the Charleston Marathon and Montague Mile, and the announcer for the Kiawah Island Marathon. A running related highlight was having the opportunity to do the finish line announcing for the 2000  US Women's Olympic Marathon Team Trials."},
{"name":"Mark Knowling",
"image":"images/rsz_1mark.jpg",
"info":"Transplants from the Midwest, Mark and his family have been in Charleston for 12 years now...and he is still acclimating to the heat. He has been running since grade school in some manner or another, swam a bit in college, moved to the marathon distance many moons ago, delved into some sprint triathlons, and quickly became addicted to ultra marathons and trail running. You will see Mark at our groups runs, GFR classes, hanging out at the store, and participating in most any race sponsored by the store. The rest of the time is our behind-the-scenes guy taking picts and helping out with social media."},
    ]

// $('.staffInfo').hover(function(){
//  $(this).css('display', 'block');
// });
// $('.noShow').hover(function(){
//  $(this).toggleClass('staffInfo');
// });
    $scope.staff = staff;
  });
