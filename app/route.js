/*
angular.module('app', [])
    .config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        alert(1);
        $locationProvider.hashPrefix('!');
        var route = $routeProvider;
        route.when('/login', {
          controller: 'loginctrl',
          templateUrl: 'template/login.html'
        });
        route.otherwise('/login');
      }
    ]);
*/
