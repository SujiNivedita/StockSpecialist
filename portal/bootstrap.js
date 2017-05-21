define([
    'require',
    'angular',    
    'StockSpecialist/StockSpecialist',
    'StockSpecialist/StockSpecialist-Ctrl',
], function (require, angular) {

    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['StockSpecialist']);
    });
});