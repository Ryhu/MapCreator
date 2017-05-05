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
    var arrayX = 5;
    var arrayY = 5;

    for (var i=0;i<arrayX;i++){
      var tempArray = [];
      for (var j=0;j<arrayY;j++){
        tempArray.push(0);
      }
      tileArray.push(tempArray);
    }



    this.tiles = tileArray;
    this.numba = 5;
  });
