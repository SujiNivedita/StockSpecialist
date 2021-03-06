/**
 * Created by sathisu on 3/17/2017.
 */
require.config({

    // alias bower_componentsraries paths
    paths: {
        'domReady': 'bower_components/requirejs-domready/domReady',
        'angular': 'bower_components/angular/angular',
        'jquery':'bower_components/jquery/dist/jquery.min',
        'angular-loader': 'bower_components/angular-loader/angular-loader',
        'ui-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap-tpls', 
         'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router',      
        'lodash': 'bower_components/lodash/dist/lodash',
        'highcharts':'bower_components/highcharts/highstock'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular-ui-router': ['angular'],
        'underscore.string': ['lodash'],
        'ui-bootstrap': ['angular'],
        'highcharts': {
      exports: "Highcharts",
      deps: ["jquery"]
    },
        'angular': {
            exports: 'angular',
            init: function() {
                if (window.console) return;
                var noop = function() {};
                window.console = {  log: noop, error: noop, warn: noop };
            }
        }
    },

    // kick start application
    deps: [
        'lodash',
        './bootstrap',
         'angular-ui-router',
         'highcharts',
        'ui-bootstrap'        
        ]
});