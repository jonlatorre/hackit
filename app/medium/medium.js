'use strict';

angular.module('myApp.medium', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/medium', {
    templateUrl: 'medium/medium.html',
    controller: 'MediumCtrl'
  });
}])

.controller('MediumCtrl', [function() {

}]);