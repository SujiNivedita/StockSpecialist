define([
    './services'
], function (ngModule) {
    return ngModule
        .service('RegisterRepo', function ($http, $rootScope) {

            this.register=function(details){
                return $http.post('/register',details);
            };
        });
});