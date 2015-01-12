(function(){
	angular
		.module('yogangular')
		.factory('classDataService', classDataService);


	classDataService.$inject = ['$http'];

	function classDataService($http) {
		var data = {
			getClasses : getClasses,
			getClass   : getClass
		};


		//
		function getClasses() {
			return $http.get('http://localhost/laravel_yoga/public/classes');
		}

		function getClass(id) {
			return $http.get('http://localhost/laravel_yoga/public/classes/' + id);
		}


		return data;
	}


})()