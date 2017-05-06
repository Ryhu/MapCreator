'use strict';

/**
 * @ngdoc function
 * @name appyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appyApp
 */
angular.module('appyApp')
  .controller('MainCtrl', function () {

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

        this.grass ='pics/grass.png';
        this.tiles = tileArray;
        this.numba = 5;
        this.selected = 'pics/grass.png';
        this.selectedID = 0;
        this.tileSet = {
          0: 'pics/grass.png',
          1: 'pics/forest.png',
          2: 'pics/mountain.png'
        };

        this.select = function(num){
          $("#tile"+ this.selectedID).removeClass("selected");
          this.selected = this.tileSet[num]
          this.selectedID = num;
          $("#tile"+num).addClass("selected");
        };

        this.increment = function(index,index2){
          this.tiles[index][index2]++;
        };

        this.tilePicker = function(index,index2){

          return this.selected;

        };
  });
