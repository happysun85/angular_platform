var app = angular.module('app', [
  'ngRoute',
  /*'login'*/
]);

app.config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    alert(1);
    $locationProvider.hashPrefix('!');
    var route = $routeProvider;
    route.when('/login', {
      controller: 'loginctrl',
      templateUrl: '../templates/login.html'
    });
    route.otherwise('/login');
  }
]);
app.controller('main', function($scope) {

})
