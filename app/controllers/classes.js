(function(){
	angular
		.module('yogangular')
		.controller('listClassController', listClassController);


	listClassController.$inject = ['classDataService'];
	function listClassController(classDataService) {
		var vm = this;

		vm.classes = [];


		//

		function init (){
			classDataService
				.getClasses()
				.then(function(data){
					vm.classes = data.data.sessions;
				});
		}

		init();
	};

})();