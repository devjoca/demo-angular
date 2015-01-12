(function(){
	angular
		.module('yogangular')
		.directive('class', classDirective);

	function classDirective(){
		return {
			restrict: 'E',
			templateUrl: 'app/views/directives/class.html',
			scope: {
				class: '=info'
			}
		}
	}
})()