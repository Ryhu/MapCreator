'use strict';

/**
 * @ngdoc function
 * @name appyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appyApp
 */
angular.module('appyApp')
  .controller('AboutCtrl', function () {

    var tileArray = [];
    var arrayX = 10;
    var arrayY = 10;
    for (var i=0;i<arrayX;i++){
      var tempArray = [];
      for (var j=0;j<arrayY;j++){
        tempArray.push(0);
      }
      tileArray.push(tempArray);
    }

    this.grass ='pics/grass.png';





    this.tiles = tileArray;
    this.numba = 5;

    this.increment = function(index,index2){
      this.tiles[index][index2]++;
    };


    this.tilePicker = function(index,index2){
      var tile = this.tiles[index][index2]%3;
      if (tile == 0){
        return 'pics/grass.png';
      }
      else if (tile == 1){
        return 'pics/forest.png';
      }
      else if (tile == 2){
        return 'pics/mountain.png';
      };
    };



  });
