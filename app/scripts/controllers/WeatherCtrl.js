(function() {
	function weatherCtrlFunct($scope, WeatherSvc) {
		
	}

	angular
		.module("app")
		.controller("WeatherCtrl",  ["$scope", "WeatherSvc", weatherCtrlFunct]);
})();