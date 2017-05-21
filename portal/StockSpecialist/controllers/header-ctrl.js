 'use strict';

define(['angular'], function (angular) {
 
  angular.module('StockSpecialistApp.controllers.headerCtrl', [])
  .controller('headerCtrl',function($scope,$rootScope,$state,$http,$window,$uibModal,stockDetailsRepo){
  
                        
 stockDetailsRepo.getstockDetail().then(function(data){
            $scope.events=data.data;
        })
    });
});
