/**
 * Created by sathisu on 3/17/2017.
 */
//main app file with main bootstrap route config
define([
        'angular',
        'ui-bootstrap',
        './services/services',
        'StockSpecialist/controllers/header-ctrl',
        'StockSpecialist/controllers/home-ctrl',
         'StockSpecialist/controllers/register-ctrl',    
         'StockSpecialist/controllers/details-ctrl'      
           
    ],
    function(angular){
        return angular.module('StockSpecialist',[
                'ui.router',            
                'ui.bootstrap',
              
                'StockSpecialist.repos',            
                'StockSpecialistApp.controllers.headerCtrl',
                'StockSpecialistApp.controllers.homeCtrl',
                'StockSpecialistApp.controllers.registerCtrl',
                'StockSpecialistApp.controllers.detailsCtrl'
            ])
            .config(function ($stateProvider, $urlRouterProvider){
                $urlRouterProvider.otherwise('home');

                $stateProvider
                    .state('home', {
                        url: '/home',
                        abstract: false,
                        views: {
                            'header': {
                                templateUrl: 'StockSpecialist/views/header.html',
                                controller: 'headerCtrl'
                            },
                            'site-content@': {
                                templateUrl:'StockSpecialist/views/home.html',
                                controller:'homeCtrl'
                            },
                            'footer': {
                                templateUrl: 'StockSpecialist/views/footer.html'
                            }
                        },
                        resolve:{
                            auth:function($q,$window){

                            }
                        }
                    });
                $stateProvider
                    .state('home.register', {
                        url:'/register/:eventId',
                        abstract:false,
                        views:{
                            'site-content@': {
                                templateUrl:'StockSpecialist/views/register.html',
                                controller:'registerCtrl'
                            }
                        },
                        resolve:{
                            auth:function($q,$window){

                            }
                        }
                    });
                     $stateProvider
                    .state('home.details', {
                        url:'/details/:symbol',
                        abstract:false,
                        views:{
                            'site-content@': {
                                templateUrl:'StockSpecialist/views/details.html',
                                controller:'detailsCtrl'
                            }
                        },
                        resolve:{
                            auth:function($q,$window){

                            }
                        }
                    });
            })
            .run([
                '$rootScope',
                '$state',function($rootScope,$state,$window){

                    $rootScope.$state = $state;

                    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                        console.log($state.current.name);
                        console.log(toState.name);
                    });


                    $rootScope.$on('$stateChangeSuccess', function () {

                    });

                    $rootScope.$on('$stateNotFound', function () {

                    });

                    $rootScope.$on('$stateChangeError',
                        function (event, toState, toParams, fromState, fromParams, error) {
                            console.log(error);
                            //if(error === "Not Authorized"){
                            //    $state.go("login");
                            //}
                        });
                }]);
    });