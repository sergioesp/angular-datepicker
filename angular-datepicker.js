/**
 * angular-datepicker v1.0.0
 * 2015 Tibor Cz, http://microtroll.github.io/angular-datepicker
 * License: MIT
 */
(function() {
  'use strict';

  var jqDatepicker = angular.module('jqDatepicker', []);

  jqDatepicker.directive('jqdatepicker', function() {
    return {
      restrict: 'EAC',
      require: 'ngModel',
      scope: {
        format: '@'
      },
      link: function(scope, el, attrs, ngModelCtrl) {
        if (!scope.format) {
          scope.format = 'mm/dd/yy';
        }

        var updateModel = function(dateText) {
          scope.$apply(function() {
            ngModelCtrl.$setViewValue(dateText);
          });
        };

        var opts = {
          dateFormat: scope.format,
          onSelect: function(dateText) {
            updateModel(dateText);
          }
        };

        el.datepicker(opts);
      }
    };
  });

})();
