'use strict';

/* Controllers */

angular.module('mcmApp.controllers', [])
 .controller('mcmAppController', function($scope) {
    $scope.user = { firstName: 'Venkata', lastName: 'Rapaka', formattedName: 'Venkata Rapaka'};
     
    
    
    
  })
  .controller('DashCtrl', function($scope) {
    
    
    
  })
  .controller('FinanceCtrl', function($scope) {
          $scope.Message = "";
  })
  .controller('TransportCtrl', function($scope) {
          $scope.Message = "";
  })
  .controller('MediaCtrl', function($scope) {
          $scope.Message = "";
  })
  .controller('CalendarCtrl', function($scope) {
          $scope.Message = "";
  })
;



/*
// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
*/