console.log("JS Loaded");

var App = angular.module('myApp',[]);
App.controller("working",["$scope", "$http", function($scope, $http){
  console.log("angular loaded");
    var randomList = [];
  $scope.listAdd = function(){
    var itemToAdd = $scope.nameInput;
    $scope.nameInput = "";
    randomList.push(itemToAdd);
    console.log(randomList);
    $scope.randomList = randomList;
  };
  $scope.listRemove = function(){
    console.log(this.$index);
    var del = this.$index;
    randomList.splice(del, 1);

  };
}]);
