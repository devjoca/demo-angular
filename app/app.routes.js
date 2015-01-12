(function(){
	angular
		.module('yogangular')
		.config(config);

	config.$inject = ['$routeProvider'];
	function config($routeProvider) {
		$routeProvider
			.when('/',{
				templateUrl: 'app/views/index.html',
			})
			.when('/classes', {
				templateUrl: 'app/views/classes.html',
				controller: 'listClassController',
				controllerAs: 'vm'
			})
			.when('/classes/:id', {
				templateUrl: 'app/views/class-detail.html',
				controller: 'classDetailController',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});
	}
})();