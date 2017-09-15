angular.module('myApp').factory('getHeros',['$http', function($http) {
	//var heros = [];
	//var fn = function() {
	return $http.get('http://localhost:8081/getHeros')
		/*.then(function(res) {
	   		//console.log(res);
	   		//heros = res.data;
	   		//return heros;
		});*/
	//}
	//return heros;
}]);