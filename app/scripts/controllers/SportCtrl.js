(function() {
	function sportCtrlFunct($scope, SportSvc) {
		SportSvc.getAllSports(function(r) {
      $scope.sports = r;
    });   		
	}

	angular
		.module("app")
		.controller("SportCtrl",  ["$scope", "SportSvc", sportCtrlFunct]);
})();