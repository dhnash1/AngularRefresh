console.log("JS Loaded");

var App = angular.module('myApp',[]);
App.controller("working",["$scope", "$http", function($scope, $http){
  console.log("angular loaded");
    var randomList = [];
    var x = 0;
  $scope.listAdd = function(){
    var itemToAdd = $scope.nameInput;
    $scope.nameInput = "";
    var newObject = {
      name : itemToAdd,
      number : x
    };
    randomList.push(newObject);
    console.log(randomList);
    $scope.randomList = randomList;
    x = x + 1;
  };
  $scope.listRemove = function(){
    console.log(this.$index);
    var del = this.$index;
    randomList.splice(del, 1);

  };

  $scope.randomPick = function(){
    var arrNumb = randomList.length;
    var numb = Math.random();
    var rand = Math.round(numb * (arrNumb - 1));
    var picked = (randomList[rand].name);
    console.log(rand);
    console.log(picked);
    $scope.selected = picked;
  };
  $scope.clearList = function(){
    randomList = [];
    $scope.randomList = randomList;
    $scope.selected = "";
  };
}]);
