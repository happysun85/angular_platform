angular.module('login', [])
    .controller('loginctrl', function($scope, $http) {
      alert(  "asd");
      $scope.user = {
        username: '',
        pwd: ''
      };
      $scope.login = function() {
        $http({
          method: 'GET',
          url: 'json/login.json'
        }).then(function successCallback(response) {

        }, function errorCallback(response) {
          alert('error');
        });
      };
    });

/*.component*/
