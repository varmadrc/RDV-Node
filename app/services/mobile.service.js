angular.module('myApp').factory('getMobiles',['$http', function($http) {
	return $http({url:'http://localhost:8081/mobileData',method:'GET',headers:{'Content-Type': 'application/xml', 'authentication': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXJUYWciOiJjbG91ZGl1bVJEViIsImV4cCI6MTUwNjQzOTE2Mzg1Mn0.wPw4sVNkEbe4HdEZqNhXCf4tq_kebrg0RXkupdbG-RQ'}})
}]);