'use strict';

/**
 * @ngdoc function
 * @name csssiteApp.controller:CssCtrl
 * @description
 * # CssCtrl
 * Controller of the csssiteApp
 */
angular.module('csssiteApp')
  .controller('CssCtrl', function ($scope, $sce, buttons) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  $scope.buttons = buttons.returnBtnObjects();
      
      /*[
      {
        name: 'Highlight',
        class: '@media (max-width: 330px) {        .specialButton{        width: 90%;        margin: 5% 0 0 5%;      }      }      .specialButton{      width: 100px;      height: 100px;      color: #ffffff;      background-color: #3498db;      font-family:Open Sans Condensed;      text-decoration: none;      font-size: 1.8em;      border: 2px #ffffff solid;      margin: 10px 0 0 5px;      -webkit-transition: all 0.5s;      -moz-transition: all 0.5s;      transition: all 0.5s;      }      .specialButton:hover{      cursor: pointer;      }      .highlight:hover{      background-color: #FFffff;      color: #3498db;      }',
        markup: '<button class="specialButton highlight">  Highlight</button>'
      },
      {
        name: 'Fade',
        class: '@media (max-width: 330px) {        .specialButton{        width: 90%;        margin: 5% 0 0 5%;      }      }      .specialButton{      width: 100px;      height: 100px;      color: #ffffff;      background-color: #3498db;      font-family:Open Sans Condensed;      text-decoration: none;      font-size: 1.8em;      border: 2px #ffffff solid;      margin: 10px 0 0 5px;      -webkit-transition: all 0.5s;      -moz-transition: all 0.5s;      transition: all 0.5s;      }      .specialButton:hover{      cursor: pointer;      }      .fade:hover{      border: 0px;      color: #009999;      opacity:0;      }            ',
      markup: '<button class="specialButton fade">       Fade</button>'
      },
      {
        name: 'Boom',
      class: '@media (max-width: 330px) {      .specialButton{      width: 90%;      margin: 5% 0 0 5%;      }      }      .specialButton{      width: 100px;      height: 100px;      color: #ffffff;      background-color: #3498db;      font-family:Open Sans Condensed;      text-decoration: none;      font-size: 1.8em;      border: 2px #ffffff solid;      margin: 10px 0 0 5px;      -webkit-transition: all 0.5s;      -moz-transition: all 0.5s;      transition: all 0.5s;      }      .specialButton:hover{      cursor: pointer;      }      .boom:hover{      color: #009999;      border: #009999;      opacity: 0;      -webkit-transform: scale(2, 2);      -moz-transform: scale(2, 2);      transform: scale(2, 2);      }      ',
      markup: '<button class="specialButton boom">       Boom</button>'
      },
      {
        name: 'Focus',
        class: '@media (max-width: 330px) {  .specialButton{    width: 90%;    margin: 5% 0 0 5%;  }}.specialButton{  width: 100px;  height: 100px;  color: #ffffff;  background-color: #3498db;  font-family:Open Sans Condensed;  text-decoration: none;  font-size: 1.8em;  border: 2px #ffffff solid;  margin: 10px 0 0 5px;  -webkit-transition: all 0.5s;  -moz-transition: all 0.5s;  transition: all 0.5s;} .specialButton:hover{  cursor: pointer;}      .focus:hover{      border-width: 20px;      }      ',
        markup: '<button class="specialButton focus">      Focus</button>'
      },
      {
        name: 'Rotate',
        class: '@media (max-width: 330px) {  .specialButton{    width: 90%;    margin: 5% 0 0 5%;  }}.specialButton{  width: 100px;  height: 100px;  color: #ffffff;  background-color: #3498db;  font-family:Open Sans Condensed;  text-decoration: none;  font-size: 1.8em;  border: 2px #ffffff solid;  margin: 10px 0 0 5px;  -webkit-transition: all 0.5s;  -moz-transition: all 0.5s;  transition: all 0.5s;} .specialButton:hover{  cursor: pointer;}      .rotate:hover{      -webkit-transform: rotate(90deg);      -moz-transform: rotate(90deg);      transform: rotate(90deg);      }        ',
        markup: '<button class="specialButton rotate">     Rotate</button>'
      },
      {
        name: 'Knit',
        class: '@media (max-width: 330px) {  .specialButton{    width: 90%;    margin: 5% 0 0 5%;  }}.specialButton{  width: 100px;  height: 100px;  color: #ffffff;  background-color: #3498db;  font-family:Open Sans Condensed;  text-decoration: none;  font-size: 1.8em;  border: 2px #ffffff solid;  margin: 10px 0 0 5px;  -webkit-transition: all 0.5s;  -moz-transition: all 0.5s;  transition: all 0.5s;} .specialButton:hover{  cursor: pointer;}      .knit:hover{      height: 0px;      }      ',
        markup: '<button class="specialButton knit">       Knit</button>'
      },
      {
        name: 'Shrink',
        class: '@media (max-width: 330px) {  .specialButton{    width: 90%;    margin: 5% 0 0 5%;  }}.specialButton{  width: 100px;  height: 100px;  color: #ffffff;  background-color: #3498db;  font-family:Open Sans Condensed;  text-decoration: none;  font-size: 1.8em;  border: 2px #ffffff solid;  margin: 10px 0 0 5px;  -webkit-transition: all 0.5s;  -moz-transition: all 0.5s;  transition: all 0.5s;} .specialButton:hover{  cursor: pointer;}      .shrink:hover{      -webkit-transform: scale(0.0,0.0);      -moz-transform: scale(0.0,0.0);      transform: scale(0.0,0.0);      }      ',
        markup: '<button class="specialButton shrink">     Shrink</button>'
      },
      {
        name: 'Squezze',
        class: '@media (max-width: 330px) {  .specialButton{    width: 90%;    margin: 5% 0 0 5%;  }}.specialButton{  width: 100px;  height: 100px;  color: #ffffff;  background-color: #3498db;  font-family:Open Sans Condensed;  text-decoration: none;  font-size: 1.8em;  border: 2px #ffffff solid;  margin: 10px 0 0 5px;  -webkit-transition: all 0.5s;  -moz-transition: all 0.5s;  transition: all 0.5s;} .specialButton:hover{  cursor: pointer;}      .squezze:hover{      -webkit-transform: scale(1.5, 0.0);      -moz-transform: scale(1.5, 0.0);      transform: scale(1.5, 0.0);      }      ',
        markup: '<button class="specialButton squezze">    Squezze</button>'
      },
      {
        name: 'Deform',
        class: '@media (max-width: 330px) {  .specialButton{    width: 90%;    margin: 5% 0 0 5%;  }}.specialButton{  width: 100px;  height: 100px;  color: #ffffff;  background-color: #3498db;  font-family:Open Sans Condensed;  text-decoration: none;  font-size: 1.8em;  border: 2px #ffffff solid;  margin: 10px 0 0 5px;  -webkit-transition: all 0.5s;  -moz-transition: all 0.5s;  transition: all 0.5s;} .specialButton:hover{  cursor: pointer;}      .deform:hover{      -webkit-transform: skew(45deg,45deg);      -moz-transform: skew(45deg,45deg);      transform: skew(45deg,45deg);      }      ',
        markup: '<button class="specialButton deform">     Deform</button>'
      },
      {
        name: 'Sinking',
        class: '        .animate        {        transition: all 0.1s;        -webkit-transition: all 0.1s;      }      .action-button      {      position: relative;      padding: 10px 40px;      margin: 0px 10px 10px 0px;      float: left;      border-radius: 10px;      font-family: "Pacifico", cursive;      font-size: 25px;      color: #FFF;      text-decoration: none;	      }      .blue      {      background-color: #3498DB;      border-bottom: 5px solid #2980B9;      text-shadow: 0px -2px #2980B9;      }      ',
        markup: '<button class="action-button shadow animate blue">Sinking!</button>'
      }
    ]; */

    // $scope.title = titleMap[key];

    $scope.source = null;
    $scope.subSource = null;

    $scope.fallback = function (copy) {
      window.prompt('Press cmd+c to copy the text below.', copy);
    };
    $scope.trustedHtml = function (plainText) {
      return $sce.trustAsHtml(plainText);
    }
    $scope.toggleSource = function (target) {
      // var target = target || 'source';
      console.log(target);
      $scope.Source = target;
    };
  });