'use strict';

var controllers = {};

var MainCtrl = function ($scope, socket) {
  var init = 0;
  var $container = $('#holder');
// initialize
  var $container = $('#holder');
  $container.packery();

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.thing = "Fuck";
    socket.on('count', function(data) {
		//$scope.socketnumber = data.hello;
  		$scope.socketnumber = data.number;
  	});
    socket.on('alert', function(data) {
      console.log(data);
    });
    socket.on('photo', function(data) {
    var element = "<img src = '"+data+"' class = 'item'/>";
    $container.prepend( element ).packery( 'prepended', element );
    //$('.holder').prepended(element);
    //$scope.socketnumber = data.hello;
    });
};

var PoopCtrl = function ($scope, socket) {
  var $holder = $('.holder');



}

leanMeanApp.controller(controllers);