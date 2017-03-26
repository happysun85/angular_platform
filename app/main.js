var app = angular.module('app', ['ng', 'ngRoute', 'ui.router']);

app.config(function config($stateProvider, $urlRouterProvider, $locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      var route = $stateProvider;
      route.state("login", {
        url: '/login',
        templateUrl: "templates/login.html"
      }).state("home", {
        url: '/home',
        templateUrl: "templates/index.html"
      });
       /*$routeProvider.otherwise({
       redirectTo: '/'
       });*/
      $locationProvider.html5Mode(true);
    }
);

app.controller('main', function($scope, $state) {
  $state.go('home');
});
app.controller('home', function($scope) {

});

app.controller('loginctrl', function($scope, $http, $state) {
  $scope.user = {
    username: '',
    pwd: ''
  };
  $scope.login = function() {
    $http({
      method: 'GET',
      url: 'json/login.json'
    }).then(function successCallback(response) {
      $state.go('home');
    }, function errorCallback(response) {
      alert('error');
    });
  };
});
