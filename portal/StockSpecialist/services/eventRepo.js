define([
    './services'
], function (ngModule) {
    return ngModule
        .service('EventRepo', function ($http, $rootScope) {

            this.create=function(eventDetails){
                return $http.post('/events',eventDetails);
            };

            this.getEvents=function(){
                return $http.get('/events');
            };
        });
});