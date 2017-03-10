function hcCtrl(){
	var vm 				= this;
    vm.defaultoHelmet 	= "assets/img/helmet.svg";
    vm.base 			= '.base';
    vm.facemask 		= '.facemask'
};

angular.module('hcApp').controller('hcCtrl', hcCtrl);
