'use strict';

/**
 * @ngdoc overview
 * @name appyApp
 * @description
 * # appyApp
 *
 * Main module of the application.
 */
angular
  .module('appyApp', ['ui.router'])
  .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html'
      })

      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      });


  }]);
