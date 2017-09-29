(function() {
	function entCtrlFunct($scope, EntSvc) {
		EntSvc.getAllEnts(function(r) {
      $scope.ents = r;
    });   		
	}

	angular
		.module("app")
		.controller("EntCtrl",  ["$scope", "EntSvc", entCtrlFunct]);
})();