'use strict';

angular.module('myApp.easy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/easy', {
    templateUrl: 'easy/easy.html',
    controller: 'EasyCtrl'
  });
}])

.controller('EasyCtrl', ['$scope', function($scope) {
    $scope.name = '';
    $scope.names = [{name:"Chris"}, {name:"Calvin"}];
    $scope.addName = function() {
        $scope.names.push({'name': $scope.name});
        $scope.name = '';
    };

}]);