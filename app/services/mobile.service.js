angular.module('myApp').factory('getMobiles',['$http', function($http) {
	return $http({url:'http://localhost:8081/mobileData',method:'GET',headers:{'Content-Type': 'application/xml', 'authentication': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXJUYWciOiJjbG91ZGl1bVJEViIsImV4cCI6MTUwNjE1NTMzMDYzNX0.MP39LAbyRwnKiCbLSv6IGBO74QziPWNYLaf1VEMtrSk'}})
}]);