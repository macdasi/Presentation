'use strict';

/**
 * @ngdoc function
 * @name presentationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the presentationApp
 */
angular.module('presentationApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
