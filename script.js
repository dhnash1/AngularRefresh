console.log("JS Loaded");

var App = angular.module('myApp',[]);
App.controller("working",["$scope", "$http", function($scope, $http){
  console.log("angular");
}]);
