function hcService(){
    var vm        = this;
    vm.SVG        = "";
    vm.path       = "";
    vm.init       = init;
    vm.getStage   = getStage;
    vm.dimentions = dimentions;
    vm.paint      = paint;

    function init(){
        var stage = vm.getStage();
        Snap.load(vm.path, function(f){
            var g = f.select('g');

            stage.append(g);
            
            var dimentions = vm.dimentions(stage);
            stage.attr({
                'viewBox': (0 + ', ' + 0 + ', ' + Math.round(dimentions.width) + ', ' + Math.round(dimentions.height))
            })
        })
    };

    function getStage(){
        var stg = Snap(vm.SVG);
        return stg;
    };

    function dimentions(stg){
        var size = {
            'width' : stg.getBBox().width,
            'height': stg.getBBox().height
        };
        return size;        
    };

    function paint(color, target){
        var stage   = vm.getStage();
        var base    = stage.selectAll(target);
        base.animate({fill:color},100, mina.easein());
    }
};
angular.module('hcApp').service('hcService', hcService);