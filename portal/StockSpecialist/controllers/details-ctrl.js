 'use strict';

define(['angular'], function (angular) {
 
  angular.module('StockSpecialistApp.controllers.detailsCtrl', [])
  .controller('detailsCtrl',function($scope,$rootScope,$state,$http,$window,$uibModal,$stateParams,stockDetailsRepo){
      $scope.symbol=$stateParams.symbol;
stockDetailsRepo.getDetail($scope.symbol).then(function(data){
    $scope.stock=data.data[0];
    console.log($scope.stock);
})
var seriesOptions=[];
function createChart() {

    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 2
        },

        yAxis: {
            labels: {
                formatter: function () {
                    return (this.value > 0 ? ' + ' : '') + this.value + '%';
                }
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },

        plotOptions: {
            series: {
                compare: 'percent',
                showInNavigator: true
            }
        },

       

        series: seriesOptions
    });
}
        $http.get("http://finance.google.com/finance/info?client=ig&q=NASDAQ%3A"+$scope.symbol).then(function(data){
            var cleanData=data.data.slice(4);
                $scope.Details=JSON.parse(cleanData)[0];
                console.log(cleanData);
                console.log($scope.Details);
                seriesOptions.push($scope.Details)
                createChart();
        })
    });
});
