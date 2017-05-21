define(['angular'], function (angular) {
  'use strict';
  angular.module('StockSpecialistApp.controllers.homeCtrl', [])
    .service('stockDetailsRepo', function ($http, $rootScope) {

            this.getstockDetail=function(){
                return $http.get('/stockDetails');
            };
        })
    .controller('homeCtrl',function($scope,$rootScope,$state,stockDetailsRepo,$window){

        console.log("im the home controller");
        stockDetailsRepo.getstockDetail().then(function(data){
            $scope.stockDetails=data.data;
            console.log($scope.stockDetails)
        })
    });
});
