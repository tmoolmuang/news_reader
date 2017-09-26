(function() {
	function configFunct($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		$urlRouterProvider.when('*path', '/');
		$stateProvider
			.state("news", {
				url: "/",
				templateUrl: "templates/news.html",
				controller: "NewsCtrl"
			})
			.state("sport", {
				url: "/sport",
				templateUrl: "templates/sport.html",
				controller: "SportCtrl"
			})
			.state("weather", {
				url: "/weather",
				templateUrl: "templates/weather.html",
				controller: "WeatherCtrl"
			});
	}
	
	angular
  	.module("app", ["ui.router"])
    .config(configFunct);
})();