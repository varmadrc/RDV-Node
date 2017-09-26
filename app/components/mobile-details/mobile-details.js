
/*function mobileDetailsController($scope, getMobiles) {
    var ctrl = this;
    //ctrl.mobile.MRP1= toString(ctrl.mobile.Brand);
}*/

angular.module('myApp').component('mobileDetails', {
    bindings: {
        mobile: "<"
    },
	templateUrl: 'app/components/mobile-details/mobile-details.html'/*,
    controller: mobileDetailsController */
});