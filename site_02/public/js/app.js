'use strict';

var myApp = angular.module('Site_02', ['ng.deviceDetector']);

myApp.directive('owlAso', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.owlCarousel({
        items: 6,
        autoPlay: true,
        pagination: false
      });
    }
  };
}]);

myApp.directive('owlSingleNav', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.owlCarousel({
        autoPlay: true,
        singleItem: true
      });
    }
  };
}]);

myApp.directive('textSmall', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.text(element.text().substring(0, 63) + '...');
    }
  };
}]);