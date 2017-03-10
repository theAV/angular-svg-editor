angular.module('hcApp', ['color.picker']).config(function($provide) {
    $provide.decorator('ColorPickerOptions', function($delegate) {
        var options = angular.copy($delegate);
        options.round = true;
        options.alpha = false;
        options.format = 'hex';
        return options;
    });
});
