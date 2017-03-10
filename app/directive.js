function hcDirective(hcService){
    return {
        scope:{
           color: '@',
           facemaskcolor: '@' 
        },
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        template: '<svg id="svgCanvas" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',
        controller:'hcCtrl',
        link: linkFunction 
    };
    function linkFunction(scope, iElm, iAttrs, controller){
        var vm            = this;
        vm.hcService      = hcService;
        vm.elem           = iElm.children()[0];
        vm.hcService.SVG  = vm.elem;
        vm.hcService.path = controller.defaultoHelmet;

        vm.hcService.init();

        iAttrs.$observe('color', function(){ 
            vm.hcService.paint(scope.color, controller.base);
        });


        iAttrs.$observe('facemaskcolor', function(){ 
            vm.hcService.paint(scope.facemaskcolor, controller.facemask);
        });

    }
};
angular.module('hcApp').directive('hcDirective', hcDirective);
