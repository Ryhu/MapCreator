'use strict';

/**
 * @ngdoc function
 * @name appyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appyApp
 */
angular.module('appyApp')
.directive('mySharedScope', function () {
  return {
      controller:"MainCtrl as main",
      template: 'Name: {{main.mouse}}<br /> Street: {{main.grass}}',
      link: function ($scope, element, attrs, ctrl) {

          element.on('mousedown', function () {

              element.css('background-color', 'yellow');
          });
          element.on('mouseup', function () {
              console.log(ctrl);
              element.css('background-color', 'white');
          });
      }
  };
})
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

        this.mouse = "ghh";


        this.tileSet = {
          0: 'pics/grass.png',
          1: 'pics/forest.png',
          2: 'pics/mountain.png',
          3: 'pics/riverH.png',
          4: 'pics/riverV.png',
          5: 'pics/roadV.png',
          6: 'pics/roadH.png'
        };
        this.buttonCodes = {
          81: 0,
          87: 1,
          69: 2,
          82: 3,
          65: 4,
          83: 5,
          68: 6,


        }
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
          console.log(event.keyCode);
          this.select(this.buttonCodes[event.keyCode]);
        };

        this.addy = function(){
          this.numba++;
        }





  });
