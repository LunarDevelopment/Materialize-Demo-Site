'use strict';

/**
 * @ngdoc overview
 * @name csssiteApp
 * @description
 * # csssiteApp
 *
 * Main module of the application.
 */
angular
  .module('csssiteApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngSelect',
    'hljs',
    'ngClipboard',
    'ui.materialize'
  ])
  .config(function ($routeProvider, hljsServiceProvider, ngClipProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/', {
        templateUrl: 'views/css.html',
        controller: 'CssCtrl',
        controllerAs: 'css', 
        resolve: {
          getButtons: function (buttons) {
            buttons.returnBtnObjects();
          }
        }
      })
      .otherwise({
        redirectTo: '/main'
      });
  
    hljsServiceProvider.setOptions({
      // replace tab with 2 spaces
      tabReplace: ''
    });
  
    ngClipProvider.setPath("bower_components/zeroclipboard/dist/ZeroClipboard.swf");
  });
