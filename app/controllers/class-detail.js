(function(){

	angular
		.module('yogangular')
		.controller('classDetailController', classDetailController)


	classDetailController.$inject = ['classDataService', '$routeParams'];
	function classDetailController(classDataService, $routeParams){
		var vm = this;
		var id = $routeParams.id

		vm.class = {};

		function init(){
			classDataService
				.getClass(id)
				.then(function(result){
					vm.class = result.data;
				})
		}

		init();
	}

})();