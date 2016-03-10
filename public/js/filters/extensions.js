// js/filters/extensions.js

angular.module('extFilters', [])
	.filter('isEmptyObject', function() {
		return function(obj) {
			var name;
			for(name in obj) {
				return false;
			}
			return true;
		};
	});
