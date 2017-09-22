mobileController.$inject = ['$scope','getMobiles'];
function mobileController($scope, getMobiles) {
  var ctrl = this;

  // This would be loaded by $http etc. from services
  getMobiles.then(function(resp) {
  	//console.log(resp.data.recordset);
  	ctrl.list = resp.data.recordset;
  });

  ctrl.selected = function(){
  	console.log(ctrl.selectedMobile);
  };

  
  
}

angular.module('myApp').component('mobiles', {
	templateUrl: 'app/components/mobile/mobile.html',
	controller: mobileController
});