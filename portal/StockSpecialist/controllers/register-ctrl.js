define(['angular'], function (angular) {
  'use strict';
  angular.module('StockSpecialistApp.controllers.registerCtrl', [])
  .service('RegisterRepo', function ($http, $rootScope) {

            this.register=function(details){
                return $http.post('/register',details);
            };

            this.getAllRegistrationForEvent=function(eventId){
                return $http.get('/register/'+eventId);
            }
        })
  .controller('registerCtrl',function($scope,$rootScope,$state,$http,$window,$uibModal,RegisterRepo){
      $scope.RegisterDetails={};
      $scope.registerType=['self', 'group', 'corporate','others'];
            $scope.Register =function(){
                    var fd = new FormData();
                    fd.append('filefield', $scope.filefield);
                    $http.post('/upload',fd,{
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    }).then(function(data){
                    if(data.data.message=="Success"){
                        $scope.uploaded=true;
                        $scope.RegisterDetails.IDProof=data.data.id;
                        console.log($scope.RegisterDetails);
                        RegisterRepo.register($scope.RegisterDetails).then(function(data){
                                $uibModal.open({                
                                    templateUrl: 'EventSpecialist/views/success.html',
                                    size: 'sm',
                                    controller: function($scope,$uibModalInstance) {
                                        $scope.header = 'Registration Success'; 
                                        $scope.confirm=false; 
                                        $scope.messageBody="Your Registeration Id:"+ data.data._id;
                                        $scope.ok = function () {
                                            $uibModalInstance.close();
                                        };

                                        $scope.cancel = function () {
                                            $uibModalInstance.dismiss();
                                        };
                                    }
                                    }).result
                                    .then(function(){
                                        $state.go('home');
                                    });
                            })
                    }           
                });
            }
    })
    .directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
});
