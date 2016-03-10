// js/filters/extensions.js

angular.module('extFilters', [])

    // A filter which mimicks the jquery isEmptyObject() 
	.filter('isEmptyObject', function() {
		return function(obj) {
			var name;
			for(name in obj) {
				return false;
			}
			return true;
		};
	});
