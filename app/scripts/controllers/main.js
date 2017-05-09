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
        this.key = "a";
        this.select = function(num){
          $("#tile"+ this.selectedID).removeClass("selected");
          this.selected = this.tileSet[num];
          this.selectedID = num;
          $("#tile"+num).addClass("selected");
        };

        this.tileUpdate = function(index,index2){
          return this.tileSet[this.tiles[index][index2]];
        };

        this.tileSetter = function(index,index2){
          this.tiles[index][index2] = this.selectedID;
        };

        this.buttonPress = function(event){
          this.numba++;
          console.log(event);
          if (event.keyCode == 81){
            this.select(0);
          }
          else if (event.keyCode == 87){
            this.select(1);
          }
          else if (event.keyCode == 69){
            this.select(2);
          }

        };







  });
