'use strict';

/**
 * @ngdoc function
 * @name appyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appyApp
 */
angular.module('appyApp')
  .controller('MainCtrl', function ($scope) {
        var tileArray = [];
        var arrayX = 15;
        var arrayY = 15;
        for (var i=0;i<arrayX;i++){
          var tempArray = [];
          for (var j=0;j<arrayY;j++){
            tempArray.push(0);
          }
          tileArray.push(tempArray);
        }
        $scope.test = 0;
        $scope.grass ='pics/grass.png';
        $scope.tiles = tileArray;
        $scope.numba = 5;
        $scope.selected = 'pics/grass.png';
        $scope.selectedID = 0;

        $scope.mousedn = false;


        $scope.tileSet = {
          0: 'pics/grass.png',
          1: 'pics/forest.png',
          2: 'pics/mountain.png',
          3: 'pics/riverH.png',
          4: 'pics/riverV.png',
          5: 'pics/roadV.png',
          6: 'pics/roadH.png'
        };
        $scope.buttonCodes = {
          81: 0,
          87: 1,
          69: 2,
          82: 3,
          65: 4,
          83: 5,
          68: 6,


        }
        $scope.key = "a";
        $scope.select = function(num){
          $("#tile"+ $scope.selectedID).removeClass("selected");
          $scope.selected = $scope.tileSet[num];
          $scope.selectedID = num;
          $("#tile"+num).addClass("selected");
        };

        $scope.tileUpdate = function(index,index2){
          return $scope.tileSet[$scope.tiles[index][index2]];
        };

        $scope.tileSetter = function(index,index2){
          $scope.mousedn = true;
          $scope.tiles[index][index2] = $scope.selectedID;
        };

        $scope.mouseIf = function (index, index2){
          if ($scope.mousedn){
            $scope.tileSetter(index, index2);
          };
        };

        $scope.mouseUp = function(){
          $scope.mousedn = false;
        };

        $scope.buttonPress = function(event){
          console.log(event.keyCode);
          $scope.select($scope.buttonCodes[event.keyCode]);
        };

        $scope.addy = function(){
          $scope.numba++;
        }





  });
