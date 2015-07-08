'use strict';

var myApp = angular.module('Site_01', ['ng.deviceDetector']);

myApp.directive('scrollTop', ['$document', function ($document) {
  return {
    restrict: 'A',

    link: function () {
      $($document).scrollTop(0);
    }
  };
}]);

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

myApp.directive('changeMenu', ['deviceDetector', '$window', '$document', function (deviceDetector, $window, $document) {
  return {
    restrict: 'A',

    link: function (scope, element) {
      var windowElement = angular.element($window);
      var bodyElement = angular.element($document[0].body);
      var $html = $('html');
      var $use = ((deviceDetector.browser == 'firefox' || deviceDetector.browser == 'ie') ? $html : bodyElement);

      windowElement.on('scroll', function () {
        if ($use) {
          var marginTop = element.css('margin-top').replace('px', '') * 1;
          var marginBottom = element.css('margin-bottom').replace('px', '') * 1;
          var height = (element.outerHeight() - element.outerHeight()) + marginBottom + marginTop;

          if ($use.scrollTop() > (height))
            element.addClass('white');
          else
            element.removeClass('white');
        }
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