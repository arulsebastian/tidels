'use strict';

/* Directives */



angular.module('myApp.directives', [])
.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}])
.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
.directive('menuItem', ['$rootScope', '$location', function($rootScope, $location) {
    return function(scope, elm, attrs) {
    	var render = function() {
	      if ($location.path().indexOf(elm.attr('href').replace('#', '')) == 0) {
	      	elm.css('font-weight', 'bold');
	      } else {
	      	elm.css('font-weight', 'normal');
	      }
	    };

			$rootScope.$on('$locationChangeSuccess', function() {
				render();
			});

			render();
    };
  }]);
