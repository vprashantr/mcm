'use strict';

// Declare app level module which depends on filters, and services
angular.module('mcmApp', [
  'ngRoute',
  'ngResource',
  'mcmApp.filters',
  'mcmApp.services',
  'mcmApp.directives',
  'mcmApp.controllers',
  'ui.bootstrap'
]).
config(function($routeProvider) {
  $routeProvider.when('/dash', {templateUrl: 'partials/dash.html', controller: 'DashCtrl'})
  
  .when('/transport', {templateUrl: 'partials/transport.html', controller: 'TransportCtrl'})
  
  .when('/media', {templateUrl: 'partials/media.html', controller: 'MediaCtrl'})
  .when('/snaps', {templateUrl: 'partials/snaps.html', controller: 'SnapsCtrl'})
  .when('/videos', {templateUrl: 'partials/videos.html', controller: 'VideosCtrl'})
  .when('/music', {templateUrl: 'partials/music.html', controller: 'MusicCtrl'})
  
  .when('/finance', {templateUrl: 'partials/finance.html', controller: 'FinanceCtrl'})
  .when('/receipts', {templateUrl: 'partials/receipts.html', controller: 'ReceiptsCtrl'})
  
  .when('/calendar', {templateUrl: 'partials/calendar.html', controller: 'CalendarCtrl'})
  .when('/bdays', {templateUrl: 'partials/bdays.html', controller: 'BDaysCtrl'})
  
  .when('/upload', {templateUrl: 'partials/upload.html', controller: 'UploadCtrl'})
  
  .otherwise({redirectTo: '/dash'});
  

  //$locationProvider.html5Mode(true).hashPrefix('!');
  //http://blog.releaseboard.com/2013/12/angular-js-gotcha-2-html5-mode.html
})

.factory("notificationFactory", function () {
    return {
        success: function () {
            //toastr.success("Success")
            console.log("Success");
        },
        error: function (n) {
            //toastr.error(n, "Error")
            console.log("Error:", n);
        }
    }
})
.factory("crudGridDataFactory", ["$http", "$resource", function (n, t) {
    return function (n) {
        return t("api/" + n + "/:id", {
            id: "@id"
        }, {
            update: {
                method: "PUT"
            }
        }, {
            query: {
                method: "GET",
                isArray: !1
            }
        })
    }
}])
;
