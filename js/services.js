'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

  


angular.module('mcmApp.services', []).value('version', '0.1')
.factory('currentUserAPIService', function($http) {
    var currentUserAPI = {};
    
    currentUserAPI.getWinUserName = function() {
        return $http({
            method: 'JSONP',
            url: 'http://dev3xooe/GetUserName.ashx?callback=JSON_CALLBACK'
            //url: 'http://10.76.110.235:8081/api/users?login=&callback=JSON_CALLBACK'
        });




    }
        
    return currentUserAPI;   

})

;
