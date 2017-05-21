define([
    './services'
], function (ngModule) {
    return ngModule
        .service('AdminRepo', function ($http, $rootScope) {

            this.create=function(adminDetails){
                return $http.post('/admin',eventDetails);
            };

            this.authenticate=function(credentials){
                return $http.get('/admin/login',credentials);
            };
        });
});