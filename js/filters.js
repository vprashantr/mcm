'use strict';

/* Filters */

angular.module('mcmApp.filters', [])
 .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
  
  .filter('hardcodeFirst', function() {
  return function(arr, field, val) {
    var first = null;
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i][field] == val) {
        first = i;
        break;
      }
    }
 
    if (!first) {
      return arr;
    }
 
    var firstEl = arr[first];
    arr.splice(first, 0);
    arr.unshift(firstEl);
 
    return arr;
  }
})
  
;
