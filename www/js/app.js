// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('vision', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('mainCtrl', function($scope) {
    $scope.start = false;
    $scope.rows = [];
    $scope.sign = "sq.png";
    $scope.diffsign = "rm.png";
    $scope.init = function () {
        $scope.rows = [];
        var rows = 5;
        var cols = 4;
        var rand = {row: Math.floor(Math.random()*rows), col: Math.floor(Math.random()*cols)};
        for (var i = 0; i < rows; i++){
            var row = [];
            for (var j = 0; j < cols; j++){
                if (i==rand.row&&j==rand.col)
                    row.push({sign:$scope.diffsign});
                else
                    row.push({sign:$scope.sign});
            }
            $scope.rows.push(row);
        }
    }
    $scope.distribute = function(mode) {
        if (mode==='Случайно') {
            modes = ['Mode 1','Mode 2','Mode 2i','Mode 3','Mode 4','Mode 5','Mode 5i','Mode 6','Mode 7','Mode 8','Mode 9'];
            var rand = Math.floor(Math.random()*modes.length);
            mode = modes[rand];
        }
        switch (mode){
            case 'Режим 1':
                $scope.sign = "sq.png";
                $scope.diffsign = "rm.png";
                break;
            case 'Режим 2':
                $scope.sign = "br.png";
                $scope.diffsign = "pr.png";
                break;
            case 'Режим 3':
                $scope.sign = "br.png";
                $scope.diffsign = "tr.png";
                break;
            case 'Mode 1':
                $scope.sign = "button button-icon icon ion-log-in";
                $scope.diffsign = "button button-icon icon ion-log-out";
                break;
            case 'Mode 2':
                $scope.sign = "button button-icon icon ion-woman";
                $scope.diffsign = "button button-icon icon ion-man";
                break;
            case 'Mode 2i':
                $scope.sign = "button button-icon icon ion-man";
                $scope.diffsign = "button button-icon icon ion-woman";
                break;
            case 'Mode 3':
                $scope.sign = "button button-icon icon ion-close-circled";
                $scope.diffsign = "button button-icon icon ion-plus-circled";
                break;
            case 'Mode 4':
                $scope.sign = "button button-icon icon ion-arrow-graph-up-right";
                $scope.diffsign = "button button-icon icon ion-arrow-graph-down-right";
                break;
            case 'Mode 5':
                $scope.sign = "button button-icon icon ion-unlocked";
                $scope.diffsign = "button button-icon icon ion-locked";
                break;
            case 'Mode 5i':
                $scope.sign = "button button-icon icon ion-locked";
                $scope.diffsign = "button button-icon icon ion-unlocked";
                break;
            case 'Mode 6':
                $scope.sign = "button button-icon icon ion-chatbubbles";
                $scope.diffsign = "button button-icon icon ion-chatboxes";
                break;
            case 'Mode 7':
                $scope.sign = "button button-icon icon ion-headphone";
                $scope.diffsign = "button button-icon icon ion-music-note";
                break;
            case 'Mode 8':
                $scope.sign = "button button-icon icon ion-happy-outline";
                $scope.diffsign = "button button-icon icon ion-sad-outline";
                break;
            case 'Mode 9':
                $scope.sign = "button button-icon icon ion-university";
                $scope.diffsign = "button button-icon icon ion-cube";
                break;
            case 'Mode 10':
                $scope.sign = "button button-icon icon ion-happy-outline";
                $scope.diffsign = "button button-icon icon ion-stop";
                break;
            default:
                break;
        }
        $scope.init();
        $scope.result = undefined;
        $scope.start = true;
        $scope.time = new Date();
    }
    $scope.guess = function(sign) {
        if (sign == $scope.diffsign) {
            $scope.fintime = new Date();
            $scope.result = $scope.fintime - $scope.time;
        }
        $scope.start = false;   
    }
});